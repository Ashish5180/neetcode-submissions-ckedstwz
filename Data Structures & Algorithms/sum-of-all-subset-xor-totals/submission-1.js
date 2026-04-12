class Solution {
    subsetXORSum(nums) {
        let result = 0;
        
        // Saare numbers ka OR nikalo
        for (let num of nums) {
            result |= num;  // OR operation
        }
        
        // 2^(n-1) se multiply karo
        // n = array length
        return result * Math.pow(2, nums.length - 1);
    }
}