class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        // Step 1: create mapping
        let map = {};
        for (let i = 0; i < order.length; i++) {
            map[order[i]] = i;
        }

        // Step 2: compare adjacent words
        for (let i = 0; i < words.length - 1; i++) {
            let w1 = words[i];
            let w2 = words[i + 1];

            // Step 3: compare characters
            let len = Math.min(w1.length, w2.length);
            let foundDifference = false;

            for (let j = 0; j < len; j++) {
                if (w1[j] !== w2[j]) {
                    if (map[w1[j]] > map[w2[j]]) {
                        return false;
                    }
                    foundDifference = true;
                    break;
                }
            }

            // Edge case: prefix issue
            if (!foundDifference && w1.length > w2.length) {
                return false;
            }
        }

        return true;
    }
}