class Solution {
  /**
   * @param {string[]} arr
   * @param {number} k
   * @return {string}
   */
  kthDistinct(arr, k) {
    const unique = arr.filter((value, index, array) => {
      return array.indexOf(value) === array.lastIndexOf(value);
    });
    return unique[k - 1] ?? "";
  }
}
