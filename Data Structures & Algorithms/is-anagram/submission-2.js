class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;

        let f = {}

        for(let char of s){
            f[char] = (f[char] || 0) +1 
        }

        for(let char of t){
            if(!f[char] || f[char]<0){
                return false;
            }
            f[char]--
        }

        return true;
    }
}
