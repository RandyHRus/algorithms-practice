# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        leftLevels = self.levelOrder(root.left)
        rightLevels = self.levelOrder(root.right)
        # Merge left and right levels
        ll = len(leftLevels)
        lr = len(rightLevels)
        solution = [None] * (max(ll, lr) + 1)
        solution[0] = [root.val]
        i = 1
        while i <= ll and i <= lr:
            solution[i] = leftLevels[i-1] + rightLevels[i-1]
            i += 1
        while i <= ll:
            solution[i] = leftLevels[i-1]
            i += 1
        while i <= lr:
            solution[i] = rightLevels[i-1]
            i += 1
        return solution