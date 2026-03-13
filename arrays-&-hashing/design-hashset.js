class MyHashSet {
  constructor() {
    this.hashList = [];
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    const exist = this.hashList.includes(key);
    if (!exist) {
      this.hashList.push(key);
    }
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const index = this.hashList.indexOf(key);
    if (index > -1) {
      this.hashList.splice(index, 1);
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.hashList.includes(key);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
