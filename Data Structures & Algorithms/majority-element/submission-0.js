class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {};

        for(let num of nums){
            if(map[num]=== undefined){
                map[num] = 1;
            }else{
                map[num] = map[num] +1
            }
        }

        for(let key in map){
            if(map[key]>nums.length /2){
                return Number(key)
            }
        }
    }
}
