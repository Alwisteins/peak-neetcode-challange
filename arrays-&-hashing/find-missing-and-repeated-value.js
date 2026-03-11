class Solution {
  /**
   * @param {number[][]} grid
   * @return {number[]}
   */
  findMissingAndRepeatedValues(grid) {
    const value = new Map();
    const missAndRep = [];
    const flatten = grid.flat();

    for (let i = 0; i < flatten.length; i++) {
      if (value.has(flatten[i])) {
        missAndRep.push(flatten[i]);
      } else {
        value.set(flatten[i], 1);
      }
    }

    for (let i = 0; i < flatten.length; i++) {
      if (!value.has(i + 1)) {
        missAndRep.push(i + 1);
      }
    }

    return missAndRep;
  }
}
