class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x===0) return 0
        let low =1;
        let high =x;
        let ans =0;
        while(low<=high){
            let mid = Math.floor((low+high)/2);

            if(mid *mid ===x){
                return mid
            }else if(mid*mid <x){
                ans = mid;
                low = mid+1
            }else{
                high = mid-1
            }
        }
        return ans
    }
}
