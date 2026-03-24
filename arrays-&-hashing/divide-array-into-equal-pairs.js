class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  divideArray(nums) {
    const key = new Set();

    for (let i = 0; i < nums.length; i++) {
      if (key.has(nums[i])) {
        key.delete(nums[i]);
      } else {
        key.add(nums[i]);
      }
    }

    return key.size === 0;
  }
}
