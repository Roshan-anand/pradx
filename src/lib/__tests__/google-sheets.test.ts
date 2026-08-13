import { beforeEach, describe, expect, it, mock } from "bun:test";

// Set env vars before anything
process.env.GOOGLE_SHEET_ID = "test-sheet-id";
process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = "test@test.iam.gserviceaccount.com";
process.env.GOOGLE_PRIVATE_KEY = "test-key";

const mockAppend = mock(() => Promise.resolve({ data: {} }));

mock.module("googleapis", () => ({
  google: {
    auth: {
      JWT: class {},
    },
    sheets: () => ({
      spreadsheets: {
        values: {
          append: mockAppend,
        },
      },
    }),
  },
}));

// Dynamic import after mocks are registered
const { writeToSheet } = await import("../google-sheets");

describe("google-sheets", () => {
  beforeEach(() => {
    mockAppend.mockReset();
    mockAppend.mockResolvedValue({ data: {} });
  });

  const baseLead = {
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Corp",
    industry: "Technology and Professional Services",
    "starting-point": "Brand strategy and identity",
    brief: "Need a full identity system.",
  };

  it("writeToSheet appends a row successfully", async () => {
    await writeToSheet(baseLead);

    expect(mockAppend).toHaveBeenCalledTimes(1);
    const callArgs = mockAppend.mock.calls[0][0];
    expect(callArgs.spreadsheetId).toBe("test-sheet-id");
    expect(callArgs.range).toBe("Sheet1!A:G");
    expect(callArgs.valueInputOption).toBe("RAW");
    expect(callArgs.requestBody.values[0].length).toBe(7);
    expect(callArgs.requestBody.values[0][1]).toBe("John Doe");
    expect(callArgs.requestBody.values[0][2]).toBe("john@example.com");
    expect(callArgs.requestBody.values[0][3]).toBe("Acme Corp");
    expect(callArgs.requestBody.values[0][5]).toBe("Brand strategy and identity");
    expect(callArgs.requestBody.values[0][6]).toBe(
      "Need a full identity system.",
    );
  });

  it("writeToSheet throws when the append fails (retry is handled by the route)", async () => {
    mockAppend.mockRejectedValue(new Error("sheets error"));

    await expect(writeToSheet(baseLead)).rejects.toThrow("sheets error");
    expect(mockAppend).toHaveBeenCalledTimes(1);
  });
});
