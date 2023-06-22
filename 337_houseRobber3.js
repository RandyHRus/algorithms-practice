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
 * @return {number}
 */
var rob = function(root) {
  return robHelper(root, new Map());
};

var robHelper = function(root, memo) {
  if (root == null) {
    return 0;
  }

  if (memo.has(root)) {
    return memo.get(root);
  }

  let robRoot = root.val + 
    (root.left == null ? 0 : (robHelper(root.left.left, memo) + robHelper(root.left.right, memo))) +
    (root.right == null ? 0 : (robHelper(root.right.left, memo) + robHelper(root.right.right, memo)));
  let dontRobRoot = robHelper(root.left, memo) + robHelper(root.right, memo);

  let sol = Math.max(robRoot, dontRobRoot);
  memo.set(root, sol);
  return sol;
};