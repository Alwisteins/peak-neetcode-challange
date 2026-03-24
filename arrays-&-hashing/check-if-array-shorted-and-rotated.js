class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  check(nums) {
    const n = nums.length;
    let count = 1;

    for (let i = 1; i < n * 2; i++) {
      if (nums[(i - 1) % n] <= nums[i % n]) {
        count++;
      } else {
        count = 1;
      }
      if (count === n) return true;
    }
    return n === 1;
  }
}
