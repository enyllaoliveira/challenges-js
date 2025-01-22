const TimeLimitedCache = require("./index.js");

describe("TimeLimitedCache", () => {
  test("handles basic operations", (done) => {
    const cache = new TimeLimitedCache();

    expect(cache.set(1, 42, 100)).toBe(false);
    setTimeout(() => {
      expect(cache.get(1)).toBe(42);
      expect(cache.count()).toBe(1);
    }, 50);
    setTimeout(() => {
      expect(cache.get(1)).toBe(-1);
      expect(cache.count()).toBe(0);
      done();
    }, 150);
  });

  test("handles overwriting keys", (done) => {
    const cache = new TimeLimitedCache();

    expect(cache.set(1, 42, 50)).toBe(false);
    setTimeout(() => {
      expect(cache.set(1, 50, 100)).toBe(true);
      expect(cache.get(1)).toBe(50);
    }, 40);
    setTimeout(() => {
      expect(cache.get(1)).toBe(50);
    }, 120);
    setTimeout(() => {
      expect(cache.get(1)).toBe(-1);
      done();
    }, 200);
  });
});
