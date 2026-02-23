class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMaxConsecutiveOnes(nums) {
    let greatestCons = 0;
    let tempCons = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        tempCons++;
        if (tempCons > greatestCons) {
          greatestCons = tempCons;
        }
      } else {
        tempCons = 0;
      }
    }

    return greatestCons;
  }
}
