/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 */

var longestConsecutive = function(nums) {
    const sorted = new Set(nums)
    
    if (nums.length == 0) return 0
    let longest = 1

    for(let x of nums){
        if(!sorted.has(x-1)){
            let length = 0
            while(sorted.has(x+length)){
                length++
            }
            longest = Math.max(longest,length)
        }
    }
    return longest
};
nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))
