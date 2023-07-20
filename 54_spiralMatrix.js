/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    let solution = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            solution.push(matrix[top][i]);
        }
        top += 1;

        for (let i = top; i <= bottom; i++) {
            solution.push(matrix[i][right]);
        }
        right -= 1;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                solution.push(matrix[bottom][i]);
            }
            bottom -= 1;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                solution.push(matrix[i][left]);
            }
            left += 1;
        }
    }

    return solution;
};