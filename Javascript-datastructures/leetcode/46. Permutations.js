/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUtil = (arr,pos,size)=>{
        if(pos == size){
            console.log(arr)
            return
        }else{
            for(let i=pos;i<size;i++){
                [arr[i],arr[pos]] = [arr[pos],arr[i]]
                permuteUtil(arr,pos+1,size)
                [arr[i],arr[pos]] = [arr[pos],arr[i]]
            }
        }
        return arr
}
var permute = function(nums) {
    size = nums.length
    return permuteUtil(nums,0,size)
};
console.log(permute([1,2,3]))