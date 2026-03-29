class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        

        for(let i =0;i<nums.length;i++){
          let num = nums[i];
          let need = target-num;

          if(need in map){
            return [map[need], i];

          }
          map[num] = i
        }
    }

}
