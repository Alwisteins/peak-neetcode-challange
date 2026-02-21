class Solution {
  /**
   * @param {string[]} details
   * @return {number}
   */
  countSeniors(details) {
    let oldPassengers = 0;

    for (const detail of details) {
      const age = detail[11] + detail[12];
      if (age > 60) {
        oldPassengers++;
      }
    }

    return oldPassengers;
  }
}
