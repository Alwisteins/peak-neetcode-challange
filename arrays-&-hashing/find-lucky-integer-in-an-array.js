class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  findLucky(arr) {
    const frequency = new Map();

    for (let i = 0; i < arr.length; i++) {
      frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
    }

    let result = -1;

    for (const [key, value] of frequency) {
      if (key === value) {
        result = Math.max(result, value);
      }
    }

    return result;
  }
}
