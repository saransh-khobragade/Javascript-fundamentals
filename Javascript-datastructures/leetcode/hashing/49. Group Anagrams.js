/*
https://leetcode.com/problems/group-anagrams/description/
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
var groupAnagrams = function(strs) {
    const hmap = {}
    const result = []

    for(let i=0;i<strs.length;i++){
        const sorted = strs[i].split('').sort().join('')
        if(sorted in hmap){
            hmap[sorted].push(strs[i])
        }else{
            hmap[sorted]=[strs[i]]
        }
    }

    for(x in hmap){
        result.push(hmap[x])
    }
    
    return result
};

strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))

