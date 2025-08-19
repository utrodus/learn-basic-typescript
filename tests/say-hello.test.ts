import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return Hello Utrodus", function () {
    expect(sayHello("Utrodus")).toBe("Hello Utrodus");
  });
});
