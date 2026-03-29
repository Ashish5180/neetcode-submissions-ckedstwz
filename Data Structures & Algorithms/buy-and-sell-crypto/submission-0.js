class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let left = 0;       // buy pointer
        let right = 1;      // sell pointer
        let maxProfit = 0;

        while (right < prices.length) {
            if (prices[right] > prices[left]) {
                // profit ho sakta hai
                let profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                // sasta din mila, left ko yahan le aao
                left = right;
            }
            right++;
        }

        return maxProfit;
    }
    }

