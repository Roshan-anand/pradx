import { z } from "zod";

export const leadInquirySchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  company: z
    .string()
    .transform((value) => (value === "" ? undefined : value))
    .optional(),
  industry: z.string().min(1),
  service: z.string().min(1),
  budget: z
    .string()
    .transform((value) => (value === "" ? undefined : value))
    .optional(),
  brief: z.string().min(1),
  "bot-field": z.string().optional(),
});
