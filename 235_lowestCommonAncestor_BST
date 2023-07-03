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
    
    if (root === null) {
        return null;
    }

    if (p.val > q.val) {
        let temp = p;
        p = q;
        q = temp;
    }

    if (root.val >= p.val && root.val <= q.val) {
        return root;
    } else {
        return lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q);
    }
};