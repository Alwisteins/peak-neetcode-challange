class Solution {
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  sortColors(nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;

    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    while (mid <= end) {
      switch (nums[mid]) {
        case 0:
          swap(nums, start, mid);
          start++;
          mid++;
          break;
        case 1:
          mid++;
          break;
        case 2:
          swap(nums, mid, end);
          end--;
          break;
      }
    }
  }
}
