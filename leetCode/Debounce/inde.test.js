const debounce = require("./index");

jest.useFakeTimers();

describe("debounce", () => {
  test("should call the function only after the specified delay", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 50);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(50);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should pass the correct arguments to the function", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn("Hello", "World");
    jest.advanceTimersByTime(100);

    expect(mockFn).toHaveBeenCalledWith("Hello", "World");
  });

  test("should cancel previous calls within the delay window", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 50);

    debouncedFn();
    jest.advanceTimersByTime(30);
    debouncedFn();
    jest.advanceTimersByTime(30);
    debouncedFn();

    jest.advanceTimersByTime(50);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
