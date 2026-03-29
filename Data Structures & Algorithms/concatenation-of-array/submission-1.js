class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let length = nums.length *2;
        let arr = new Array(length);

        for(let i=0;i<nums.length;i++){
            arr[i]=nums[i];
            arr[i + nums.length]=nums[i];
        }
        return arr;
    }
}
let sol = new Solution();
console.log(sol.getConcatenation([1,4,1,2]));
