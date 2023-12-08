/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return lowestCommonAncestorHelper(root,p,q).result;
};
let lowestCommonAncestorHelper = function(root, p, q) {
    let bitmask = 0b00;
    if (root === null) return {bitmask}
    let lcaLeft = lowestCommonAncestorHelper(root.left, p, q);
    let lcaRight = lowestCommonAncestorHelper(root.right, p, q);
    if (lcaLeft.result) return {result: lcaLeft.result};
    if (lcaRight.result) return {result: lcaRight.result};

    if (root.val === p.val) bitmask = bitmask | 0b01;
    if (root.val === q.val) bitmask = bitmask | 0b10;
    bitmask = bitmask | lcaLeft.bitmask | lcaRight.bitmask;
    if (bitmask === 0b11) return {result: root}

    return {bitmask};
};