
//https://leetcode.com/problems/two-sum/description/
/**
Input: nums = [2,7,11,15], target = 9
Output: [0,1] */


const nums = [2,7,11,15]
const target = 9

var twoSum = function(nums, target) {
    
    const hmap = {}

    for(let i=0;i<nums.length;i++){
        const diff = target - nums[i]
        if(diff in hmap){
            return [hmap[diff],i]
        }
        hmap[nums[i]]=i
    }
};

console.log(twoSum(nums,target))