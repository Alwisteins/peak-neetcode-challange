class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.prefix = [];
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
      cur += nums[i];
      this.prefix.push(cur);
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    let rightSum = this.prefix[right];
    let leftSum = left > 0 ? this.prefix[left - 1] : 0;

    return rightSum - leftSum;
  }
}
