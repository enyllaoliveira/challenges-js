const cancellable = require("./index.js");

test("should execute function after delay if not cancelled", () => {
  jest.useFakeTimers();
  const mockFn = jest.fn();

  const cancelFn = cancellable(mockFn, [1, 2, 3], 1000);

  jest.advanceTimersByTime(1000);
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
});

test("should cancel function execution if cancelled", () => {
  jest.useFakeTimers();
  const mockFn = jest.fn();

  const cancelFn = cancellable(mockFn, [1, 2, 3], 1000);
  cancelFn();
  jest.advanceTimersByTime(1000);
  expect(mockFn).not.toHaveBeenCalled();
});
