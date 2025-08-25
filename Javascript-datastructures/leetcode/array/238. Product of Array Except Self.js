/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 */
var productExceptSelf = function(nums) {
    let left=1
    let right=1
    let productArr = Array(nums.length-1).fill(1)
    for(let i=1;i<nums.length;i++){
        productArr[i] = nums[i-1]*left
        left = productArr[i]
    }
    for(let j=nums.length-1;j>=0;j--){
        productArr[j] = productArr[j]*right
        right *= nums[j]
    }
    return productArr
};
nums = [1,2,3,4]
console.log(productExceptSelf(nums))