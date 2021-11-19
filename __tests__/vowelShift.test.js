const { vowelShift } = require("../vowelShift");

describe("vowelShift()", () => {
  test("shifts vowels 1 place to right", () => {
    expect(vowelShift("hello", 1)).toBe("holle");
  });
});
