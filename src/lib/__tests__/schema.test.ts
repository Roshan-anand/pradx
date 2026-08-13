import { describe, expect, it } from "bun:test";
import { leadInquirySchema } from "../schema";

describe("leadInquirySchema", () => {
  const validData = {
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Corp",
    industry: "Technology and Professional Services",
    "starting-point": "Brand strategy and identity",
    brief: "We are building a new brand and need a full identity system.",
  };

  it("valid data passes", () => {
    const result = leadInquirySchema.safeParse(validData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("John Doe");
      expect(result.data.email).toBe("john@example.com");
      expect(result.data.company).toBe("Acme Corp");
      expect(result.data.industry).toBe("Technology and Professional Services");
      expect(result.data["starting-point"]).toBe("Brand strategy and identity");
      expect(result.data.brief).toBe(
        "We are building a new brand and need a full identity system.",
      );
    }
  });

  it("missing name fails", () => {
    const { name: _, ...rest } = validData;
    const result = leadInquirySchema.safeParse(rest);
    expect(result.success).toBe(false);
    if (!result.success) {
      const nameIssue = result.error.issues.find(
        (i) => i.path.join(".") === "name",
      );
      expect(nameIssue).toBeDefined();
    }
  });

  it("invalid email fails", () => {
    const result = leadInquirySchema.safeParse({
      ...validData,
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const emailIssue = result.error.issues.find(
        (i) => i.path.join(".") === "email",
      );
      expect(emailIssue).toBeDefined();
    }
  });

  it("missing industry fails", () => {
    const { industry: _, ...rest } = validData;
    const result = leadInquirySchema.safeParse(rest);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues.find(
        (i) => i.path.join(".") === "industry",
      );
      expect(issue).toBeDefined();
    }
  });

  it("missing starting point fails", () => {
    const { "starting-point": _, ...rest } = validData;
    const result = leadInquirySchema.safeParse(rest);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues.find(
        (i) => i.path.join(".") === "starting-point",
      );
      expect(issue).toBeDefined();
    }
  });

  it("missing brief fails", () => {
    const { brief: _, ...rest } = validData;
    const result = leadInquirySchema.safeParse(rest);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues.find(
        (i) => i.path.join(".") === "brief",
      );
      expect(issue).toBeDefined();
    }
  });

  it("optional fields can be omitted", () => {
    const result = leadInquirySchema.safeParse({
      name: validData.name,
      email: validData.email,
      industry: validData.industry,
      "starting-point": validData["starting-point"],
      brief: validData.brief,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.company).toBeUndefined();
    }
  });

  it("empty strings for optional fields become undefined via transform", () => {
    const result = leadInquirySchema.safeParse({
      ...validData,
      company: "",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.company).toBeUndefined();
    }
  });
});
