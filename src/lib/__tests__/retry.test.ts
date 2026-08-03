import { describe, expect, it, mock } from "bun:test";
import { retry } from "../retry";

describe("retry", () => {
  it("succeeds on first attempt", async () => {
    const fn = mock(() => Promise.resolve("ok"));

    const result = await retry(fn, { maxRetries: 2, silent: false });

    expect(result).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("retries up to maxRetries and returns result on last try", async () => {
    const fn = mock()
      .mockRejectedValueOnce(new Error("fail 1"))
      .mockRejectedValueOnce(new Error("fail 2"))
      .mockResolvedValueOnce("ok");

    // Override setTimeout to skip delays
    const origSetTimeout = globalThis.setTimeout;
    const delays: number[] = [];
    globalThis.setTimeout = ((callback: () => void, ms: number) => {
      delays.push(ms);
      callback();
      return 1 as unknown as ReturnType<typeof setTimeout>;
    }) as typeof setTimeout;

    try {
      const result = await retry(fn, { maxRetries: 2, silent: false });

      expect(result).toBe("ok");
      expect(fn).toHaveBeenCalledTimes(3);
      expect(delays).toEqual([1000, 2000]);
    } finally {
      globalThis.setTimeout = origSetTimeout;
    }
  });

  it("with silent=true catches final error and returns undefined", async () => {
    const fn = mock(() => Promise.reject(new Error("always fails")));

    const origSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = ((callback: () => void, _ms: number) => {
      callback();
      return 1 as unknown as ReturnType<typeof setTimeout>;
    }) as typeof setTimeout;

    try {
      const result = await retry(fn, { maxRetries: 2, silent: true });

      expect(result).toBeUndefined();
      expect(fn).toHaveBeenCalledTimes(3);
    } finally {
      globalThis.setTimeout = origSetTimeout;
    }
  });

  it("with silent=false throws on final error", async () => {
    const err = new Error("always fails");
    const fn = mock(() => Promise.reject(err));

    const origSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = ((callback: () => void, _ms: number) => {
      callback();
      return 1 as unknown as ReturnType<typeof setTimeout>;
    }) as typeof setTimeout;

    try {
      expect(retry(fn, { maxRetries: 2, silent: false })).rejects.toBe(err);
      // Wait for the rejection to be caught
      await Promise.resolve();
      expect(fn).toHaveBeenCalledTimes(3);
    } finally {
      globalThis.setTimeout = origSetTimeout;
    }
  });

  it("respects backoff timing with increasing delays", async () => {
    const fn = mock()
      .mockRejectedValueOnce(new Error("fail 1"))
      .mockRejectedValueOnce(new Error("fail 2"))
      .mockRejectedValueOnce(new Error("fail 3"))
      .mockResolvedValueOnce("ok");

    const origSetTimeout = globalThis.setTimeout;
    const delays: number[] = [];
    globalThis.setTimeout = ((callback: () => void, ms: number) => {
      delays.push(ms);
      callback();
      return 1 as unknown as ReturnType<typeof setTimeout>;
    }) as typeof setTimeout;

    try {
      await retry(fn, { maxRetries: 3, silent: false });
      // For maxRetries=3, attempts are: 0, 1, 2, 3 (4 total)
      // Delays after attempts 0, 1, 2: 1s, 2s, 3s
      expect(delays).toEqual([1000, 2000, 3000]);
    } finally {
      globalThis.setTimeout = origSetTimeout;
    }
  });
});
