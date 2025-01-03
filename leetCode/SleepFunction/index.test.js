const sleep = require("./index.js");

describe("sleep", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("should wait for the specified time", async () => {
    const millis = 1000;
    const mockCallback = jest.fn();

    const sleepPromise = sleep(millis).then(mockCallback);

    jest.advanceTimersByTime(999);
    await Promise.resolve();
    expect(mockCallback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    await sleepPromise;
    expect(mockCallback).toHaveBeenCalled();
  });
});
