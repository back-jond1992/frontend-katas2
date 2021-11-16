// Please do not change the name of this function
const subArrSum = (array) => {
  if (array.length === 0 || array.every((number) => number < 0)) return 0;

  if (array.every((number) => number > 0)) {
    return array.reduce((a, b) => a + b);
  }

  let currentMax = 0;
  let maxSoFar = 0;

  for (let i = 0; i < array.length; i++) {
    currentMax = Math.max(0, currentMax + array[i]);
    maxSoFar = Math.max(currentMax, maxSoFar);
  }

  return maxSoFar;
};

module.exports = { subArrSum };
