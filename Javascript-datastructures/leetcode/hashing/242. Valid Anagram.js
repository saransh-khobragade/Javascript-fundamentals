
var isAnagram = function(s, t) {
    const hmap ={}
    if(s.length!=t.length){
        return false
    }
    for(let x of s){
        if(hmap[x]){
            hmap[x]+=1
        }else{
            hmap[x]=1
        }
    }
    for(let x of t){
        if(hmap[x]){
            hmap[x]-=1
        }
    }
    for(let x in hmap){
        if(hmap[x]>0){
            return false
        }
    }
    return true
}

s = "anagram"
t="nagaram"
isAnagram(s,t)