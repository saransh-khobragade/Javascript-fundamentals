//Input: nums = [1,2,3,1]
//Output: true

var containsDuplicate = function(nums) {
    const hmap={}
    for(x of nums){
        if(x in hmap){
            return true
        }else{
            hmap[x]=x
        }
    }
    return false
};

nums = [1,2,3,1]
console.log(containsDuplicate(nums))