class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isIsomorphic(s, t) {
    if (s.length < t.length || t.length < s.length) return false;
    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
      let a = s[i];
      let b = t[i];

      if (mapST.has(a)) {
        if (mapST.get(a) !== b) return false;
      }

      if (mapTS.has(b)) {
        if (mapTS.get(b) !== a) return false;
      }

      mapST.set(a, b);
      mapTS.set(b, a);
    }

    return true;
  }
}
