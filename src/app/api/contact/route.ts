import type { z } from "zod";

import { pool } from "@/db/client";
import { writeToSheet } from "@/lib/google-sheets";
import { retry } from "@/lib/retry";
import { leadInquirySchema } from "@/lib/schema";

// Request body mirrors the contact form fields (src/components/sections/contact.tsx).
type LeadInquiryBody = z.infer<typeof leadInquirySchema>;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = leadInquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const { "bot-field": botField, ...lead }: LeadInquiryBody = parsed.data;

  if (botField) {
    return Response.json({ ok: true });
  }

  try {
    await retry(() => writeToSheet(lead), { maxRetries: 2, silent: false });

    // Emails are disabled for now — re-add the imports from "@/lib/email" when re-enabling.
    // await Promise.allSettled([
    //   sendWelcomeEmail(lead),
    //   sendNotificationEmail(lead),
    // ]);

    return Response.json({ ok: true });
  } catch (error) {
    // Google Sheets failed after all retries — persist to Postgres instead.
    console.error("Google Sheets write failed, falling back to DB:", error);
    try {
      await pool.query(
        `INSERT INTO lead_inquiries
          (name, email, company, industry, starting_point, brief)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          lead.name,
          lead.email,
          lead.company ?? null,
          lead.industry,
          lead["starting-point"],
          lead.brief,
        ],
      );
      return Response.json({ ok: true });
    } catch (dbError) {
      console.error("Database fallback failed:", dbError);
      return Response.json(
        { error: "Something went wrong. Please email us directly." },
        { status: 500 },
      );
    }
  }
}
