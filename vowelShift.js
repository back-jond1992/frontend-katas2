// Please do not change the name of this function
const vowelShift = (str, num) => {
  const vowels = /[aeiou]/gi;

  const storedVowels = str.match(vowels);

  const shiftedVowels = storedVowels.slice(-num).concat(storedVowels.slice(0, num));

  console.log(shiftedVowels, "shifted");

  const vowellessString = str.replace(vowels, "#");

  for (let i = 0; i < vowellessString.length; i++) {
    if (vowellessString[i] === "#") {
      let vowelIndex = i;
      vowellessString[i] = shiftedVowels[vowelIndex];
    }
  }
  return vowellessString;
};

module.exports = { vowelShift };
