//1287. Element Appearing More Than 25% In Sorted Array


/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const occIntMap = integerOccurance(arr);

  for (const [key, value] of occIntMap.entries()) {
    let percent = 25 < (value / arr.length) * 100;

    if (percent) {
      return key;
    }
  }
};

const integerOccurance = arr => {
  const occIntMap = new Map();

  arr.forEach(num => {
    occIntMap.has(num) ? occIntMap.set(num, occIntMap.get(num) + 1) : occIntMap.set(num, 1);
  })

  return occIntMap;
}
