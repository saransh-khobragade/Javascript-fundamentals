/**
 * https://leetcode.com/problems/3sum/description/
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 */

var threeSum = function(nums) {
    let result=[]
    nums.sort((x,y)=>x-y)

    for(let i=0;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            
            let left = i+1
            let right = nums.length-1
            
            while(left<right){
                let sum = nums[i]+nums[left]+nums[right]
                
                if(sum<0){
                    left++
                }else if(sum>0){
                    right--
                }else{
                    result.push([nums[i],nums[left],nums[right]])
                    left++
                    while(nums[left]==nums[left-1]){
                        left++
                    }
                }
            } 
        }
    }
    return result
};
nums = [-1,0,1,0]
console.log(threeSum(nums))
