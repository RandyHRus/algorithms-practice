# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # Returns depth of tree is tree is balanced
        # Returns -1 if tree is not balanced
        def balancedHelper(root: Optional[TreeNode]) -> int:
            if root is None:
                return 0
            depthLeft = balancedHelper(root.left)
            if depthLeft == -1:
                return -1
            depthRight = balancedHelper(root.right)
            if depthRight == -1:
                return -1
            if abs(depthLeft - depthRight) <= 1:
                return max(depthLeft, depthRight)+1
            return -1
        return False if balancedHelper(root) == -1 else True
