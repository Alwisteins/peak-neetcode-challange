class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
      let count = new Array(26).fill(0);

      for (const char of str) {
        let index = char.charCodeAt(0) - 97;
        count[index]++;
      }

      let key = count.join(",");

      if (!map.has(key)) {
        map.set(key, []);
      }

      map.get(key).push(str);
    }

    return Array.from(map.values());
  }
}
