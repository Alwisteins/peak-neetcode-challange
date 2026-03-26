class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        let c_count = new Map();
        let total = 0;

        for (const c of chars) {
            c_count.set(c, (c_count.get(c) || 0) + 1)
        }

        for (const w of words) {
            let w_count = new Map();
            let good = true;

            for (const c of w) {
                w_count.set(c, (w_count.get(c) || 0) + 1);
                if (!c_count.has(c) || w_count.get(c) > c_count.get(c)) {
                    good = false;
                    break;
                }
            }
            if (good) {
                total += w.length
            }
        }

        return total;
    }
}
