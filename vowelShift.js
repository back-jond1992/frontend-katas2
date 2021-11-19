// Please do not change the name of this function
const vowelShift = (str, num) => {
  const vowels = /[aeiou]/gi;

  const storedVowels = str.match(vowels);

  const shiftedVowels = str.slice(str.length - num);
  //const rotatedVowels = shiftedVowels.concat
  console.log(shiftedVowels.slice(num));

  console.log(storedVowels, "stored");
  console.log(shiftedVowels, "shifted");

  const vowellessString = str.replace(vowels, " ");

  console.log(vowellessString);
};

module.exports = { vowelShift };
