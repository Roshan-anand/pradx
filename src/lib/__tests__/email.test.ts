import { beforeEach, describe, expect, it, mock } from "bun:test";

const mockSend = mock();
const mockResend = { emails: { send: mockSend } };

mock.module("../resend", () => ({ getResend: () => mockResend }));

describe("email", () => {
  beforeEach(() => {
    mockSend.mockReset();
  });

  it("sendWelcomeEmail calls resend.emails.send with correct params", async () => {
    mockSend.mockResolvedValueOnce({ id: "msg_123" });

    // Override setTimeout to skip retry delays
    const origSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = ((cb: () => void) => {
      cb();
      return 1 as unknown as ReturnType<typeof setTimeout>;
    }) as typeof setTimeout;

    try {
      const { sendWelcomeEmail } = await import("../email");
      await sendWelcomeEmail({
        name: "John",
        email: "john@example.com",
        company: "Acme Corp",
        industry: "Technology",
        service: "Brand strategy and identity",
        brief: "Need a full identity system.",
      });

      expect(mockSend).toHaveBeenCalledTimes(1);

      const callArgs = mockSend.mock.calls[0][0];
      expect(callArgs.to).toBe("john@example.com");
      expect(callArgs.subject).toContain("PRADXCLUSIVE");
      expect(callArgs.html).toContain("John");
      expect(callArgs.html).toContain("Acme Corp");
    } finally {
      globalThis.setTimeout = origSetTimeout;
    }
  });

  it("sendNotificationEmail calls resend.emails.send with correct params", async () => {
    mockSend.mockResolvedValueOnce({ id: "msg_456" });

    const origSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = ((cb: () => void) => {
      cb();
      return 1 as unknown as ReturnType<typeof setTimeout>;
    }) as typeof setTimeout;

    try {
      process.env.PRADX_NOTIFICATION_EMAIL = "team@pradx.com";
      process.env.RESEND_FROM_EMAIL = "noreply@pradx.com";

      const { sendNotificationEmail } = await import("../email");
      await sendNotificationEmail({
        name: "Jane",
        email: "jane@example.com",
        company: "Beta Inc",
        industry: "Fashion and Lifestyle",
        service: "Campaign or launch",
        budget: "₹1–3 lakh",
        brief: "Launch campaign for a new collection.",
      });

      expect(mockSend).toHaveBeenCalledTimes(1);

      const callArgs = mockSend.mock.calls[0][0];
      expect(callArgs.to).toBe("team@pradx.com");
      expect(callArgs.subject).toContain("Jane");
      expect(callArgs.subject).toContain("Fashion and Lifestyle");
      expect(callArgs.html).toContain("Launch campaign for a new collection.");
    } finally {
      globalThis.setTimeout = origSetTimeout;
    }
  });

  it("both functions retry on failure, then silently return", async () => {
    mockSend.mockRejectedValue(new Error("network error"));

    const origSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = ((cb: () => void) => {
      cb();
      return 1 as unknown as ReturnType<typeof setTimeout>;
    }) as typeof setTimeout;

    try {
      const { sendWelcomeEmail } = await import("../email");

      // Should not throw (silent mode), just resolve to undefined
      await expect(
        sendWelcomeEmail({
          name: "John",
          email: "john@example.com",
          industry: "Other",
          service: "Not sure yet",
          brief: "Exploring options.",
        }),
      ).resolves.toBeUndefined();

      // Called maxRetries+1 = 3 times
      expect(mockSend).toHaveBeenCalledTimes(3);
    } finally {
      globalThis.setTimeout = origSetTimeout;
    }
  });
});
