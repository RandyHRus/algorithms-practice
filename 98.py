# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBSTHelper(self, root, _min, _max) -> bool:
        if (root is None):
            return True
        if (root.val < _min or root.val > _max):
            return False
        leftResult = self.isValidBSTHelper(root.left, _min, min(_max, root.val-1))
        rightResult = self.isValidBSTHelper(root.right, max(_min, root.val+1), _max)
        return leftResult and rightResult

    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.isValidBSTHelper(root, -float("inf"), float("inf"))