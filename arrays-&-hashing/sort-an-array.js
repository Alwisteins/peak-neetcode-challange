class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    if (nums.length <= 1) {
      return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    const sortedLeft = this.sortArray(left);
    const sortedRight = this.sortArray(right);

    return this.merge(sortedLeft, sortedRight);
  }

  merge(left, right) {
    let result = [];

    let lPointer = 0;
    let rPointer = 0;

    while (lPointer < left.length && rPointer < right.length) {
      if (left[lPointer] < right[rPointer]) {
        result.push(left[lPointer]);
        lPointer++;
      } else {
        result.push(right[rPointer]);
        rPointer++;
      }
    }

    while (lPointer < left.length) {
      result.push(left[lPointer]);
      lPointer++;
    }

    while (rPointer < right.length) {
      result.push(right[rPointer]);
      rPointer++;
    }

    return result;
  }
}
