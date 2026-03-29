class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        const map = new Map();

        for(let i=0;i<nums.length;i++){
           const num = nums[i];
           if(map.has(num)){
            if(i-map.get(num)<=k){
                return true
            }
            
           }
           map.set(num,i)
           
        }
        return false
    }
}
