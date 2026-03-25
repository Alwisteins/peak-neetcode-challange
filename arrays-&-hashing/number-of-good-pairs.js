class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  numIdenticalPairs(nums) {
    const freq = new Map();

    for (let i = 0; i < nums.length; i++) {
      freq.set(nums[i], freq.get(nums[i]) + 1 || 1);
    }

    let count = 0;
    for (const n of freq.values()) {
      count += (n * (n - 1)) / 2;
    }

    return count;
  }
}
