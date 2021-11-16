const { subArrSum } = require("../subArrSum");

describe("subArrSum()", () => {
  test("empty array returns 0", () => {
    expect(subArrSum([])).toBe(0);
  });
  test("array of positive integers returns sum", () => {
    expect(subArrSum([1, 2, 3, 4])).toBe(10);
  });
  test("array of negative integers 0", () => {
    expect(subArrSum([-1, -2, -3, -4])).toBe(0);
  });
  test("works with mixed array", () => {
    expect(subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  test("works with mixed array", () => {
    expect(subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])).toBe(36);
  });
});
