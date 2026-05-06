class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber) {
        let result = "";

        while (columnNumber > 0) {
            columnNumber--; // shift to 0-based
            let char = String.fromCharCode(65 + (columnNumber % 26));
            result = char + result;
            columnNumber = Math.floor(columnNumber / 26);
        }

        return result;
    }
}