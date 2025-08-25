/*
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

var characterReplacement = function(s, k) {
   let l=0
   let charArr = Array(26).fill(0)
   let longest = 0

   for(let r=0;r<s.length;r++){
        charArr[s[r].charCodeAt(0)-65]+=1
        let maxFreq = Math.max(...charArr)
        
        while((r-l+1)-maxFreq > k){
            charArr[s[l].charCodeAt(0)-65]-=1
            l++
        }
        
        longest = Math.max(longest,r-l+1)
   }
   return longest
};
let s = "AABABBA", k = 2
console.log(characterReplacement(s,k))