class Solution {
  /**
   * @param {number} numRows
   * @return {number[][]}
   */
  generate(numRows) {
    let result = [];
    for (let row = 0; row < numRows; row++) {
      let currRow = [];
      for (let numPos = 0; numPos <= row; numPos++) {
        if (numPos === 0 || numPos === row) {
          currRow.push(1);
        } else {
          const value = result[row - 1][numPos - 1] + result[row - 1][numPos];
          currRow.push(value);
        }
      }
      result.push(currRow);
    }
    return result;
  }
}
