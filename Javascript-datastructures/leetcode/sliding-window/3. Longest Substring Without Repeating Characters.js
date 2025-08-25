/**
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

var lengthOfLongestSubstring = function(s) {
    let unique = new Set()
    let left=0
    let max=0
    for(let right=0;right<s.length;right++){
        while(unique.has(s[right])){
            unique.delete(s[left])
            left++
        }
        unique.add(s[right])
        max = Math.max(max,right-left+1)
    }
    return max
};
s="pwwkew"
console.log(lengthOfLongestSubstring(s))