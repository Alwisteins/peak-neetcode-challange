class Solution {
  /**
   * @param {string} order
   * @param {string} s
   * @return {string}
   */
  customSortString(order, s) {
    let orderOrderWtfMan = new Map();

    for (let i = 0; i < order.length; i++) {
      orderOrderWtfMan.set(order[i], i);
    }

    return s
      .split("")
      .sort((a, b) => {
        let aPst = orderOrderWtfMan.get(a) ?? Infinity;
        let bPst = orderOrderWtfMan.get(b) ?? Infinity;

        return aPst - bPst;
      })
      .join("");
  }
}
