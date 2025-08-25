const binarySearch = (nums,start,end,target)=>{
    if(start<=end){
        let mid = Math.floor((start+end)/2)

        if(target < nums[mid]){
            return binarySearch(nums,start,mid-1,target)
        }else if(target > nums[mid] ){
            return binarySearch(nums,mid+1,end,target)
        }else{
            return mid
        }
    }else{
        return -1
    }
}
var search = function(nums, target) {
    return binarySearch(nums,0,nums.length-1,target)
};
