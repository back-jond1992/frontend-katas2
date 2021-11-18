// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  if (num < 1) {
    return "";
  }
  if (num >= 100) {
    return "C" + romanNumeralEncoder(num - 100);
  }
  if (num >= 90) {
    return "XC" + romanNumeralEncoder(num - 90);
  }
  if (num >= 60) {
    return "LX" + romanNumeralEncoder(num - 60);
  }
  if (num >= 50) {
    return "L" + romanNumeralEncoder(num - 50);
  }
  if (num >= 40) {
    return "XL" + romanNumeralEncoder(num - 40);
  }
  if (num >= 10) {
    return "X" + romanNumeralEncoder(num - 10);
  }
  if (num >= 9) {
    return "IX" + romanNumeralEncoder(num - 9);
  }
  if (num >= 5) {
    return "V" + romanNumeralEncoder(num - 5);
  }
  if (num >= 4) {
    return "IV" + romanNumeralEncoder(num - 4);
  }
  if (num >= 1) {
    return "I" + romanNumeralEncoder(num - 1);
  }
};

module.exports = { romanNumeralEncoder };

// is number equal to 1
// is number greater than 1 less than 5
// is number greater than or equal to 5 less than 10

// return roman numeral ->  minus from num -> put remainder back through function

// example 7 greater than 5 so return v - 2 remainder
