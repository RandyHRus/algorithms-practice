/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    let sol = new Set();

    if (s.length < 10) {
        return Array.from(sol);
    }

    let hashSet = new Set();

    for (let i = 0; i <= s.length - 10; i++) {

        let subStr = s.substring(i, i+10);
        if (hashSet.has(subStr)) {
            sol.add(subStr);
        } else {
            hashSet.add(subStr);
        }
    }

    return Array.from(sol);
};