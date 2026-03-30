class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let s1 = [];
        
        for(let i=0;i<s.length;i++){
            let ch = s[i];
            
            if(ch=="(" || ch=="{" ||ch=="["){
                s1.push(ch);
            }else{
                if(s1.length===0) return false;
                let top = s1[s1.length-1]
                 if(ch===")" && top === "("
                    || ch==="}" && top ==="{" ||
                     ch==="]" && top === "["){
                        s1.pop();
                     }else{
                        return false;
                     }
            }
         
               
        }
 return s1.length===0;
    }
}
