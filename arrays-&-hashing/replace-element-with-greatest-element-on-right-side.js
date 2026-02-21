class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  replaceElements(arr) {
    const result = [-1];
    let maxSoFar = -1;

    for (let i = arr.length - 1; i > 0; i--) {
      const curr = arr[i];
      if (curr > maxSoFar) {
        maxSoFar = curr;
        result.unshift(curr);
      } else {
        result.unshift(maxSoFar);
      }
    }
    return result;
  }
}
