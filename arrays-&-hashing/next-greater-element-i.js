class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number[]}
   */
  nextGreaterElement(nums1, nums2) {
    let helperStack = [];
    let greaterElement = new Map();

    for (let i = nums2.length - 1; i >= 0; i--) {
      let element = nums2[i];

      if (helperStack.length === 0) {
        helperStack.push(element);
        greaterElement.set(element, -1);
        continue;
      }

      if (helperStack.at(-1) > element) {
        greaterElement.set(element, helperStack.at(-1));
        helperStack.push(element);
        continue;
      }

      while (helperStack.length !== 0 && helperStack.at(-1) <= element) {
        helperStack.pop();
      }

      if (helperStack.length === 0) {
        greaterElement.set(element, -1);
      } else {
        greaterElement.set(element, helperStack.at(-1));
      }

      helperStack.push(element);
    }

    const result = nums1.map((el) => greaterElement.get(el));

    return result;
  }
}
