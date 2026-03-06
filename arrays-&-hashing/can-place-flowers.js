class Solution {
  /**
   * @param {number[]} flowerbed
   * @param {number} n
   * @return {boolean}
   */
  /**
   * flowers = n
   * tempFb = flowerbed
   *
   * lop to flowerbed length
   *      (current - 1 == 0) && current == 0 && current + 1 == 0
   *          tempfb[current] = 1
   *          flowers--
   *
   * return flowers length is 0
   * */
  canPlaceFlowers(flowerbed, n) {
    if (n === 0) return true;

    let flowers = n;
    let tempFb = flowerbed;

    for (let i = 0; i < tempFb.length; i++) {
      const left = tempFb[i - 1];
      const right = tempFb[i + 1];
      if (tempFb[i] === 0) {
        if (left !== 1 && right !== 1) {
          tempFb[i] = 1;
          flowers--;
        }
      }

      if (flowers === 0) return true;
    }

    return flowers === 0;
  }
}
