const timeLimit = require("./index.js");
describe("timeLimit", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("should resolve if fn completes within the time limit", async () => {
    const mockFn = jest.fn(
      (time) =>
        new Promise((resolve) => setTimeout(() => resolve("Success"), time))
    );

    const limitedFn = timeLimit(mockFn, 2000);

    const resultPromise = limitedFn(1000);

    jest.advanceTimersByTime(1000);

    const result = await resultPromise;

    expect(result).toBe("Success");
    expect(mockFn).toHaveBeenCalledWith(1000);
  });

  test("should reject if fn exceeds the time limit", async () => {
    const mockFn = jest.fn(
      (time) =>
        new Promise((resolve) => setTimeout(() => resolve("Success"), time))
    );

    const limitedFn = timeLimit(mockFn, 2000);

    const resultPromise = limitedFn(3000);

    jest.advanceTimersByTime(2000);

    await expect(resultPromise).rejects.toBe("Time Limit Exceeded");

    expect(mockFn).toHaveBeenCalledWith(3000);
  });

  test("should clear the timeout if fn completes before the limit", async () => {
    const mockFn = jest.fn(
      (time) =>
        new Promise((resolve) => setTimeout(() => resolve("Success"), time))
    );

    const limitedFn = timeLimit(mockFn, 2000);

    const resultPromise = limitedFn(1500);

    jest.advanceTimersByTime(1500);

    const result = await resultPromise;

    expect(result).toBe("Success");
    expect(mockFn).toHaveBeenCalledWith(1500);
  });
});
