class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const compliment = new Map();
    for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];
      let pair = compliment.get(difference);
      if (pair !== undefined) {
        return [pair, i];
      }
      compliment.set(nums[i], i);
    }
  }
}
