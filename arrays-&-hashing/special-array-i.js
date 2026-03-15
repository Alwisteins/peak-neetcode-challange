class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  isArraySpecial(nums) {
    for (let i = 0; i < nums.length; i++) {
      if ((nums[i] + nums[i + 1]) % 2 === 0) {
        return false;
      }
    }

    return true;
  }
}
