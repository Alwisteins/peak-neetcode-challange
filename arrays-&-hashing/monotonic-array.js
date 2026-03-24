class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  isMonotonic(nums) {
    let increase = true;
    let decrease = true;

    for (let i = 0; i < nums.length - 1; i++) {
      // increase
      if (nums[i] < nums[i + 1]) {
        decrease = false;
      }
      // decrease
      else if (nums[i] > nums[i + 1]) {
        increase = false;
      }
    }

    return increase || decrease;
  }
}
