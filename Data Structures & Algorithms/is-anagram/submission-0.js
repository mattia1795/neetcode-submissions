class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const Hashs={}
       const Hasht={}
       if(s.length != t.length) {
        return false;
       }
       for(let i=0; i<s.length; i++) {
        Hashs[s[i]] = (Hashs[s[i]] || 0) + 1
        Hasht[t[i]] = (Hasht[t[i]] || 0) + 1
       }
       for(const key in Hashs) {
        if(Hashs[key]!= Hasht[key]) {
            return false
        }
       }
        return true
        }
    }
