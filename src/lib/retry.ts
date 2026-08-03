interface RetryOptions {
  maxRetries: number;
  silent: boolean;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function retry<T>(
  fn: () => Promise<T>,
  opts: RetryOptions,
): Promise<T | void> {
  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === opts.maxRetries) {
        if (!opts.silent) throw error;
        console.error(
          `Operation failed after ${opts.maxRetries + 1} attempts:`,
          error,
        );
        return;
      }
      await sleep(1000 * (attempt + 1));
    }
  }
}
