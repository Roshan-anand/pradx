import { describe, expect, it, mock } from "bun:test";

mock.module("googleapis", () => ({
  google: {
    auth: {
      JWT: class {
        constructor(...args: unknown[]) {}
      },
    },
    sheets: mock(() => ({
      spreadsheets: {
        values: {
          append: mock(() => Promise.resolve({ data: {} })),
        },
      },
    })),
  },
}));

import { google } from "googleapis";

describe("googleapis mock check", () => {
  it("can create JWT auth", () => {
    const auth = new google.auth.JWT("email", undefined, "key", ["scope"]);
    expect(auth).toBeDefined();
  });

  it("can call sheets", () => {
    const sheets = google.sheets({ version: "v4", auth: {} });
    expect(sheets).toBeDefined();
    expect(sheets.spreadsheets).toBeDefined();
  });
});
