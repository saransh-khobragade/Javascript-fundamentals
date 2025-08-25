/**
 * https://leetcode.com/problems/minimum-window-substring/description/
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */

var minWindow = function (s, t) {
    let have = {}
    let need = {}

    let haveCount = 0
    let needCount = 0

    for (x of t) {
        if (have[x]) {
            have[x] += 1
        } else {
            have[x] = 1
            haveCount++
        }
    }

    let l = 0
    let r = 0
    let window = 0
    let min = Infinity
    let start,end=0
    
    while (r<=s.length) {
        if (needCount < haveCount) {
            if (have[s[r]]) {
                if (need[s[r]]) {
                    need[s[r]] += 1
                } else {
                    need[s[r]] = 1
                }
                if (need[s[r]] == have[s[r]]) {
                    needCount++
                }
            }
            r++
        } else if (needCount == haveCount) {
            window = r - l
            if(window<min){
                start=l
                end=r
                min=window
            }
            if (need[s[l]]) {
                need[s[l]] -= 1
                if (need[s[l]] < have[s[l]]) {
                    needCount--
                }
            }
            l++
        }
    }
    return s.slice(start,end)
};
let s = "a", t = "aa"
console.log(minWindow(s, t))