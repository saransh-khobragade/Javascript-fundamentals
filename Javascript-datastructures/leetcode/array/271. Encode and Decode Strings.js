/**
 * https://leetcode.com/problems/encode-and-decode-strings/description/
 * Input: ["neet","code","love","you"]
 * Output:["neet","code","love","you"]
 */
function encode(strs) {
    let s = ""
    for (let x of strs) {
        s += x.length + "#" + x
    }
    return s
}
function decode(str) {
    let result = []
    let temp = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "#") {
            temp += str[i]
        } else {
            i++
            let n = parseInt(temp)
            let temp2 = ""
            let l = i + n
            for (let j = i; j < l; j++) {
                temp2 += str[j]
                i++
            }
            result.push(temp2)
            temp = ''
            i--
        }
    }
    return result
}
strs = ["neet", "code", "love", "you"]
s = encode(strs)
console.log(decode(s))