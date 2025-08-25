/**
 * Input: s = "([])"
 * Output: true
 */
var isValid = function (s) {
    let st = []
    let hmap = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let x of s) {
        if (x in hmap) {
            if (st[st.length - 1] == hmap[x]){
                st.pop()
            }else{
                return false
            }
        }else{
            st.push(x)
        }
    }
    if (st.length == 0) {
        return true
    } else {
        return false
    }
};
let s = "()"
console.log(isValid(s))

// ]][[