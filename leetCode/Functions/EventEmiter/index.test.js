const EventEmitter = require("./index.js");

describe("EventEmitter", () => {
  test("should emit with no callbacks", () => {
    const emitter = new EventEmitter();
    expect(emitter.emit("event")).toEqual([]);
  });

  test("should subscribe and emit callbacks", () => {
    const emitter = new EventEmitter();
    const cb1 = jest.fn(() => 5);
    const cb2 = jest.fn(() => 6);

    emitter.subscribe("event", cb1);
    emitter.subscribe("event", cb2);

    expect(emitter.emit("event")).toEqual([5, 6]);
    expect(cb1).toHaveBeenCalled();
    expect(cb2).toHaveBeenCalled();
  });

  test("should handle unsubscribe", () => {
    const emitter = new EventEmitter();
    const cb = jest.fn(() => 5);

    const sub = emitter.subscribe("event", cb);
    expect(emitter.emit("event")).toEqual([5]);

    sub.unsubscribe();
    expect(emitter.emit("event")).toEqual([]);
  });

  test("should handle multiple events", () => {
    const emitter = new EventEmitter();
    const cb1 = jest.fn(() => 1);
    const cb2 = jest.fn(() => 2);

    emitter.subscribe("event1", cb1);
    emitter.subscribe("event2", cb2);

    expect(emitter.emit("event1")).toEqual([1]);
    expect(emitter.emit("event2")).toEqual([2]);
  });

  test("should pass arguments to callbacks", () => {
    const emitter = new EventEmitter();
    const cb = jest.fn((a, b) => a + b);

    emitter.subscribe("event", cb);
    expect(emitter.emit("event", [3, 4])).toEqual([7]);
    expect(cb).toHaveBeenCalledWith(3, 4);
  });
});
