class Solution {
  wordPattern(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const mapP = new Map();
    const mapW = new Map();

    for (let i = 0; i < pattern.length; i++) {
      const p = pattern[i];
      const w = words[i];

      const pIndex = mapP.has(p) ? mapP.get(p) : -1;
      const wIndex = mapW.has(w) ? mapW.get(w) : -1;

      if (pIndex !== wIndex) return false;

      mapP.set(p, i);
      mapW.set(w, i);
    }

    return true;
  }
}
