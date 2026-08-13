import { getResend } from "./resend";
import { retry } from "./retry";
import type { LeadData } from "./types";

export async function sendWelcomeEmail(lead: LeadData): Promise<void> {
  const html = `
    <h1>Thank you for reaching out, ${lead.name}!</h1>
    <p>We received your project brief${lead.company ? ` from <strong>${lead.company}</strong>` : ""}.</p>
    <p>We'll get in touch with you soon to discuss how PRADXCLUSIVE can help.</p>
    <p>— PRADXCLUSIVE</p>
  `;

  await retry(
    () =>
      getResend().emails.send({
        from: `PRADXCLUSIVE <${process.env.RESEND_FROM_EMAIL!}>`,
        to: lead.email,
        subject: "We received your project brief — PRADXCLUSIVE",
        html,
      }),
    { maxRetries: 2, silent: true },
  );
}

export async function sendNotificationEmail(lead: LeadData): Promise<void> {
  const html = `
    <h2>New Project Inquiry</h2>
    <table>
      <tr><td><strong>Name</strong></td><td>${lead.name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${lead.email}</td></tr>
      ${lead.company ? `<tr><td><strong>Company</strong></td><td>${lead.company}</td></tr>` : ""}
      <tr><td><strong>Industry</strong></td><td>${lead.industry}</td></tr>
      <tr><td><strong>Starting point</strong></td><td>${lead["starting-point"]}</td></tr>
      <tr><td><strong>Brief</strong></td><td>${lead.brief}</td></tr>
    </table>
  `;

  await retry(
    () =>
      getResend().emails.send({
        from: `PRADXCLUSIVE Inquiries <${process.env.RESEND_FROM_EMAIL!}>`,
        to: process.env.PRADX_NOTIFICATION_EMAIL!,
        subject: `New inquiry from ${lead.name} (${lead.industry})`,
        html,
      }),
    { maxRetries: 2, silent: true },
  );
}
