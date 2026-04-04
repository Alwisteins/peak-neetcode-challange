function findErrorNums(nums) {
  let counter = new Map();
  let res = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (counter.get(i) > 1) res[0] = i;
    if (!counter.has(i)) res[1] = i;
  }

  return res;
}
