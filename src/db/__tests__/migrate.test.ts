import { describe, expect, it, spyOn } from "bun:test";
import { pool } from "../client";
import { migrate } from "../migrate";

describe("migrate", () => {
  it("runs CREATE TABLE IF NOT EXISTS query", async () => {
    const querySpy = spyOn(pool, "query");
    querySpy.mockImplementation(() => Promise.resolve({}));

    try {
      await migrate();

      expect(querySpy).toHaveBeenCalledTimes(1);
      const sql = querySpy.mock.calls[0][0] as string;
      expect(sql).toContain("CREATE TABLE IF NOT EXISTS lead_inquiries");
      expect(sql).toContain("name");
      expect(sql).toContain("email");
      expect(sql).toContain("company");
      expect(sql).toContain("industry");
      expect(sql).toContain("service");
      expect(sql).toContain("budget");
      expect(sql).toContain("brief");
      expect(sql).toContain("created_at");
    } finally {
      querySpy.mockRestore();
    }
  });
});
