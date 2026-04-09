function specialArray(nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let prevNum = -1;
  let total_greater_el = nums.length;

  while (i < nums.length) {
    if (
      nums[i] === total_greater_el ||
      (prevNum < total_greater_el && total_greater_el < nums[i])
    ) {
      return total_greater_el;
    }

    while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
      i++;
    }

    prevNum = nums[i];
    i++;
    total_greater_el = nums.length - i;
  }
  return -1;
}
