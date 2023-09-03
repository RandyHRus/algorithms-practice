/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */

//.      1
//. 2       3
//4. 5.    6  7.  voyage = [1, 3, 7, 6, 2, 4, 5]

//.       7
//.    1.       5
//            3.    2
//                 6. 4
//             voyage=[7,5,2,4,3,6,1]
var flipMatchVoyage = function(root, voyage) {

    let indices = {};
    for (let i = 0; i < voyage.length; i++) {
        indices[voyage[i]] = i;
    } 

    return flipMatchVoyageHelper(root, voyage, 0, voyage.length-1, indices);
};

let flipMatchVoyageHelper = function (root, voyage, startIdx, endIdx, indices) {

    if (root.val != voyage[startIdx]) {
        return [-1];
    }

    let left = root.left;
    let right = root.right;
    if (left && right) {
        if (voyage[startIdx+1] == left.val) {
            // no need to flip
            let rightIndex = indices[right.val];
            if (rightIndex < startIdx || rightIndex > endIdx) {
                return [-1];
            }
            let leftResult = flipMatchVoyageHelper(left, voyage, startIdx+1, rightIndex-1, indices);
            let rightResult = flipMatchVoyageHelper(right, voyage, rightIndex, endIdx, indices);
            if (leftResult[0] == -1 || rightResult[0] == -1) {
                return [-1];
            } else {
                return leftResult.concat(rightResult);
            }
        } else if (voyage[startIdx+1] == right.val) {
            let leftIndex = indices[left.val];
            if (leftIndex < startIdx || leftIndex > endIdx) {
                return [-1];
            }
            let leftResult = flipMatchVoyageHelper(left, voyage, leftIndex, endIdx, indices);
            let rightResult = flipMatchVoyageHelper(right, voyage, startIdx+1, leftIndex-1, indices);
            if (leftResult[0] == -1 || rightResult[0] == -1) {
                return [-1];
            } else {
                return [root.val].concat(leftResult.concat(rightResult));
            }
        } else {
            return [-1];
        }
    } else if (left) {
        return flipMatchVoyageHelper(left, voyage, startIdx+1, endIdx, indices);
    } else if (right) {
        return flipMatchVoyageHelper(right, voyage, startIdx+1, endIdx, indices);
    } else {
        return [];
    }
}