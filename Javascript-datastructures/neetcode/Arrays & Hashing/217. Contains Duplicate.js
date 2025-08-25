//https://leetcode.com/problems/contains-duplicate/description/
var containsDuplicate = function(nums) {
    const hmap = {}
    nums.forEach(x=>{
        if(hmap[x]){
            hmap[x]+=1
        }else{
            hmap[x]=1
        }
    })

    for(x in hmap){
        if(hmap[x]>1){
            return true
        }
    }
    return false
};

const result = containsDuplicate([1,2,3,1])
console.log(result)
