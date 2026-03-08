class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestMonotonicSubarray(nums) {
    let result = 1;
    let subArrLen = 1;
    let order = 0;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] < nums[i]) {
        if (order > 0) {
          subArrLen++;
        } else {
          subArrLen = 2;
          order = 1;
        }
      } else if (nums[i - 1] > nums[i]) {
        if (order < 0) {
          subArrLen++;
        } else {
          subArrLen = 2;
          order = -1;
        }
      } else {
        subArrLen = 1;
        order = 0;
      }

      result = Math.max(result, subArrLen);
    }

    return result;
  }
}
