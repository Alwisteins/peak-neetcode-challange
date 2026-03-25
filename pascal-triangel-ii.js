class Solution {
  /**
   * @param {number} rowIndex
   * @return {number[]}
   */
  getRow(rowIndex) {
    let res = [1];

    for (let i = 0; i < rowIndex; i++) {
      let next_row = new Array(res.length + 1).fill(0);
      for (let j = 0; j < res.length; j++) {
        next_row[j] += res[j];
        next_row[j + 1] += res[j];
      }
      res = next_row;
    }

    return res;
  }
}
