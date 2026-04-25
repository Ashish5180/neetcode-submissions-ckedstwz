class Solution {
    climbStairs(n) {
        if (n <= 2) return n;

        let prev2 = 1; // ways(n-2)
        let prev1 = 2; // ways(n-1)

        for (let i = 3; i <= n; i++) {
            let curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}