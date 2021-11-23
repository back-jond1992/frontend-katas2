// Please do not change the name of this function
const vowelShift = (str, num) => {
  const vowels = /[aeiou]/gi;

  const storedVowels = str.match(vowels);

  const shiftedVowels = storedVowels.slice(-num).concat(storedVowels.slice(0, num));

  const vowellessString = str.replace(vowels, "#");

  function replacer(string, array) {
    while (vowellessString.includes("#")) {
      string.replace("#", array[0]);
      array.shift();
    }
  }

  const result = vowellessString.replace("#", shiftedVowels[0]);

  console.log(vowellessString.includes("#"));

  console.log(result);
};

module.exports = { vowelShift };
