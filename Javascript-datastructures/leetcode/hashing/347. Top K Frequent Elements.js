/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
*/

var topKFrequent = function(nums, k) {
    const hmap = {}
    const result = []
    const result2 = []
    for(let x of nums){
        if(x in hmap){
            hmap[x]++
        }else{
            hmap[x]=1
        }
    }
    for(let x in hmap){
       result.push([parseInt(x),hmap[x]])
    }
    result.sort((x,y)=>y[1]-x[1])
    for(let i=0;i<k;i++){
        result2.push(result[i][0])
    }
    return result2
};

nums = [1,1,1,2,2,3]
k=2
console.log(topKFrequent(nums,k))