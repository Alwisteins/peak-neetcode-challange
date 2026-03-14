class MyHashMap {
  constructor() {
    this.storage = {};
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.storage[key] = value;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    return this.storage.hasOwnProperty(key) ? this.storage[key] : -1;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    delete this.storage[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
