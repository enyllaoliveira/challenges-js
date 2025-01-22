const cancellable = require("./index.js");

describe("cancellable", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("should execute function immediately and at intervals", () => {
    const mockFn = jest.fn();

    const cancelFn = cancellable(mockFn, [1, 2, 3], 1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);

    jest.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(2000);
    expect(mockFn).toHaveBeenCalledTimes(4);

    cancelFn();
    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(4);
  });

  test("should cancel function execution before the first interval", () => {
    const mockFn = jest.fn();

    const cancelFn = cancellable(mockFn, [1, 2, 3], 1000);

    cancelFn();
    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });
});
