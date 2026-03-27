class Solution {
  /**
   * @param {string} ransomNote
   * @param {string} magazine
   * @return {boolean}
   */
  canConstruct(ransomNote, magazine) {
    let magazineCharCount = {};

    for (let char of magazine) {
      if (!magazineCharCount[char]) {
        magazineCharCount[char] = 0;
      }

      magazineCharCount[char]++;
    }

    for (let char of ransomNote) {
      if (!magazineCharCount[char] || magazineCharCount[char] < 1) {
        return false;
      }

      magazineCharCount[char]--;
    }

    return true;
  }
}
