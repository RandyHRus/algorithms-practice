/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let m = matrix.length; // # of rows
    let n = matrix[0].length // # of columns

    if (m == 0 || n == 0) {
        return false;
    }
    
    let row = searchMatrixHelperRow(matrix, target, 0, m - 1);
    if (row == null) {
        return false;
    }
    return searchMatrixHelperColumn(row, target, 0, n-1);
};

var searchMatrixHelperRow = function(matrix, target, top, bottom) {

    if (top == bottom) {
        return matrix[top];
    } 

    if (top > bottom) {
        return null;
    }

    let n = matrix[0].length // # of columns

    let midRow = top + Math.floor((bottom - top) / 2);

    if (matrix[midRow][0] > target) {
        return searchMatrixHelperRow(matrix, target, top, midRow - 1);
    } else if (matrix[midRow][n-1] < target) {
        return searchMatrixHelperRow(matrix, target, midRow+1, bottom);
    } else {
        return matrix[midRow];
    }
}

var searchMatrixHelperColumn = function(row, target, left, right) {

    if (left == right) {
        return (row[left] == target)
    }

    if (left > right) {
        return false;
    }

    // console.log(right);
    // console.log(left);

    let midColumn = left + Math.floor((right - left) / 2);
    if (row[midColumn] == target) {
        return true;
    } else if (row[midColumn] > target) {
        return searchMatrixHelperColumn(row, target, left, midColumn-1);
    } else {
        return searchMatrixHelperColumn(row, target, midColumn+1, right);
    }
}