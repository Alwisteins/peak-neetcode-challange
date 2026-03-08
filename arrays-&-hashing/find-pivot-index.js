class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  pivotIndex(nums) {
    const total = nums.reduce((curr, acc) => curr + acc, 0);
    let value = 0;

    for (let i = 0; i < nums.length; i++) {
      if (value === total - nums[i] - value) {
        return i;
      } else {
        value += nums[i];
      }
    }
    return -1;
  }
}
