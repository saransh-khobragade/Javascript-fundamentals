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
let nums = [ 2, 3, 4, 10, 40 ];
console.log(binarySearch(nums,0,nums.length-1,10))