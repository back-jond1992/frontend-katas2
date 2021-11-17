const { romanNumeralEncoder } = require("../romanNumeralEncoder");

describe("romanNumeralEncoder()", () => {
  test('none number returns "Not a number"', () => {
    expect(romanNumeralEncoder("badcase")).toEqual("Not a number");
  });
  test('converts 1 to "I"', () => {
    expect(romanNumeralEncoder(1)).toEqual("I");
  });
  test('converts 2 to "II"', () => {
    expect(romanNumeralEncoder(2)).toEqual("II");
  });
  test('converts 4 to "IV"', () => {
    expect(romanNumeralEncoder(4)).toEqual("IV");
  });
  test('converts 10 to "X"', () => {
    expect(romanNumeralEncoder(10)).toEqual("X");
  });
  test('converts 17 to "XVII"', () => {
    expect(romanNumeralEncoder(17)).toEqual("XVII");
  });
  test('converts 60 to "LX"', () => {
    expect(romanNumeralEncoder(60)).toEqual("LX");
  });
  test('converts 75 to "LXXV"', () => {
    expect(romanNumeralEncoder(75)).toEqual("LXXV");
  });
  test('converts 91 to "XCI"', () => {
    expect(romanNumeralEncoder(91)).toEqual("XCI");
  });
});
