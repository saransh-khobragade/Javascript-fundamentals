/**
 * https://leetcode.com/problems/valid-palindrome/description/
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 */

var isPalindrome = function(s) {
    s = s.split(" ").join("")
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    for(let i=0;i<s.length/2;i++){
        if(s[i].toLowerCase()!=s[s.length-i-1].toLowerCase()){
            return false
        }
    }
    return true
};
s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))
