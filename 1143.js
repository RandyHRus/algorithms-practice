/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

    let dp = [];
    for (let i = 0; i < text1.length; i++) {
        let row = [];
        for (let j = 0; j < text2.length; j++) {
            row.push(null);
        }
        dp.push(row);
    }
    for (let i = text1.length-1; i>=0; i--) {
        for (let j = text2.length-1; j>=0; j--) {
            let result = null;
            if (i === text1.length-1 || j === text2.length-1) {
                result = (text1[i] === text2[j] || (dp[i] && dp[i][j+1] === 1) || dp[i+1] && dp[i+1][j] === 1) ? 1 : 0;
            } else {
                if (text1[i] === text2[j]) {
                    result = dp[i+1][j+1] + 1;
                } else {
                    result = Math.max(dp[i+1][j], dp[i][j+1]);
                }
            }
            dp[i][j] = result;
        }
    }
    return dp[0][0];
};