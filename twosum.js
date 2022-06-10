//1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  const numIndexMap = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (!numIndexMap.has(target - nums[i])) {
      numIndexMap.set(nums[i], i)
    } else {
      return [numIndexMap.get(target - nums[i]), i];
    }
  }

};
