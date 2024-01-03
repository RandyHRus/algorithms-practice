# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Return (int, int)
        # First int corresponds to the max diameter
        # Second int corresponds to the length of the longest subtree
        def diameterHelper(root: Optional[TreeNode]) -> (int, int):
            if (root is None):
                return (0,0)
            leftDiameter, leftLength = diameterHelper(root.left)
            rightDiameter, rightLength = diameterHelper(root.right)
            maxDiameter = max(leftDiameter, rightDiameter, leftLength+rightLength)
            length = max(leftLength+1, rightLength+1)
            return (maxDiameter, length)

        diameter, _ = diameterHelper(root)
        return diameter
