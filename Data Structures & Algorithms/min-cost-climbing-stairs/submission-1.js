class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let prev2 = 0; // cost to reach step i-2
        let prev1 = 0; // cost to reach step i-1
        
        for (let i = 0; i < cost.length; i++) {
            let curr = cost[i] + Math.min(prev1, prev2);
            prev2 = prev1;
            prev1 = curr;
        }
        
        return Math.min(prev1, prev2);
    }
}