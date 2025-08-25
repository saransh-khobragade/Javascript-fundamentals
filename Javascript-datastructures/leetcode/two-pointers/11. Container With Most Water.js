/**
 * https://leetcode.com/problems/container-with-most-water/description/
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 */

var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxWater = 0

    while(left<right){
        let distance  = right - left
        let minHeight = Math.min(height[left],height[right])
        let water = distance * minHeight
        maxWater = Math.max(water,maxWater)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return maxWater
};

height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))

