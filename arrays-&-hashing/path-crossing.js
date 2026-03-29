class Solution {
  /**
   * @param {string} path
   * @return {boolean}
   */
  isPathCrossing(path) {
    const dir = {
      N: [0, 1],
      S: [0, -1],
      E: [1, 0],
      W: [-1, 0],
    };
    let visited = new Set();
    let x = 0,
      y = 0;

    visited.add("0,0");

    for (let c of path) {
      let [dx, dy] = dir[c];
      x += dx;
      y += dy;

      const pos = `${x},${y}`;

      if (visited.has(pos)) {
        return true;
      }

      visited.add(pos);
    }

    return false;
  }
}
