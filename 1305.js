/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    
    let result1 = getAllElementsOfArray(root1);
    let result2 = getAllElementsOfArray(root2);

    let solution = [];
    let i = 0;
    let j = 0;
    while (i < result1.length && j < result2.length) {
        if (result1[i] < result2[j]) {
            solution.push(result1[i]);
            ++i;
        } else {
            solution.push(result2[j]);
            ++j;
        }
    }

    while (i < result1.length) {
        solution.push(result1[i]);
        ++i;
    }

    while (j < result2.length) {
        solution.push(result2[j]);
        ++j;
    }

    return solution;
};

let getAllElementsOfArray = function(root) {

    if (root == null) {
        return [];
    }

    let leftResult = getAllElementsOfArray(root.left);
    let rightResult = getAllElementsOfArray(root.right);
    return leftResult.concat([root.val]).concat(rightResult);
}