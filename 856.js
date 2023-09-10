/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {

    if (s.length == 0) {
        return 0;
    }
    
    if (s === "()") {
        return 1;
    }

    let i = 1;
    let openBrackets = 1;
    while (openBrackets > 0) {
        if (s[i] === "(") ++openBrackets;
        else --openBrackets;
        ++i;
    }

    if (i == s.length) {
        return 2 * scoreOfParentheses(s.substring(1, s.length-1));
    } else {
        return scoreOfParentheses(s.substring(0, i)) +
            scoreOfParentheses(s.substring(i, s.length));
    }
};