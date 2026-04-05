class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number[]}
   */
  intersection(nums1, nums2) {
    let n1 = new Set(nums1);

    let res = [];
    for (let n2 of nums2) {
      if (n1.has(n2)) {
        res.push(n2);
        n1.delete(n2);
      }
    }
    return res;
  }
}
