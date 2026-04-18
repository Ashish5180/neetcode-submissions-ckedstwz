class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const inDegree = new Array(n + 1).fill(0);
        const outDegree = new Array(n + 1).fill(0);

        for (let [a, b] of trust) {
            outDegree[a]++;
            inDegree[b]++;
        }

        for (let i = 1; i <= n; i++) {
            if (outDegree[i] === 0 && inDegree[i] === n - 1) {
                return i;
            }
        }

        return -1;
    }
}