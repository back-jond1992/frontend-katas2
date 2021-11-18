const { romanNumeralEncoder } = require("../romanNumeralEncoder");

describe("romanNumeralEncoder()", () => {
  test('converts 1 to "I"', () => {
    expect(romanNumeralEncoder(1)).toEqual("I");
  });
  test('converts 2 to "II"', () => {
    expect(romanNumeralEncoder(2)).toEqual("II");
  });
  test('converts 3 to "III"', () => {
    expect(romanNumeralEncoder(3)).toEqual("III");
  });
  test('converts 4 to "IV"', () => {
    expect(romanNumeralEncoder(4)).toEqual("IV");
  });
  test('converts 5 to "V"', () => {
    expect(romanNumeralEncoder(5)).toEqual("V");
  });
  test('converts 9 to "IX"', () => {
    expect(romanNumeralEncoder(9)).toEqual("IX");
  });
  test('converts 10 to "X"', () => {
    expect(romanNumeralEncoder(10)).toEqual("X");
  });
  test('converts 17 to "XVII"', () => {
    expect(romanNumeralEncoder(17)).toEqual("XVII");
  });
  test('converts 20 to "XX"', () => {
    expect(romanNumeralEncoder(20)).toEqual("XX");
  });
  test('converts 29 to "XXIX"', () => {
    expect(romanNumeralEncoder(29)).toEqual("XXIX");
  });
  test('converts 40 to "XL"', () => {
    expect(romanNumeralEncoder(40)).toEqual("XL");
  });
  test('converts 43 to "XLIII"', () => {
    expect(romanNumeralEncoder(43)).toEqual("XLIII");
  });
  test('converts 59 to "L"', () => {
    expect(romanNumeralEncoder(49)).toEqual("XLIX");
  });
  test('converts 50 to "L"', () => {
    expect(romanNumeralEncoder(50)).toEqual("L");
  });
  test('converts 60 to "LX"', () => {
    expect(romanNumeralEncoder(60)).toEqual("LX");
  });
  test('converts 75 to "LXXV"', () => {
    expect(romanNumeralEncoder(75)).toEqual("LXXV");
  });
  test('converts 88 to "LXXXVIII"', () => {
    expect(romanNumeralEncoder(88)).toEqual("LXXXVIII");
  });
  test('converts 90 to "XC"', () => {
    expect(romanNumeralEncoder(90)).toEqual("XC");
  });
  test('converts 92 to "XCII"', () => {
    expect(romanNumeralEncoder(92)).toEqual("XCII");
  });
  test('converts 100 to "C"', () => {
    expect(romanNumeralEncoder(100)).toEqual("C");
  });
});
