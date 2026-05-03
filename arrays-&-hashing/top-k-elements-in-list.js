class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let freqNum = new Map();
    for (let num of nums) {
      freqNum.set(num, (freqNum.get(num) || 0) + 1);
    }

    let freqBucket = new Array(nums.length + 1);
    for (let [num, freq] of freqNum) {
      if (!freqBucket[freq]) {
        freqBucket[freq] = [];
      }
      freqBucket[freq].push(num);
    }

    let result = [];
    for (let i = freqBucket.length; i > 0; i--) {
      let curr = freqBucket[i];
      if (curr) {
        for (let c of curr) {
          result.push(c);
          if (result.length === k) return result;
        }
      }
    }
  }
}
