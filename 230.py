# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Returns the kth node if it exists. None Otherwise
    # Returns the number of nodes in the tree
    def preorder(self, root, k) -> (TreeNode, int):
        if (root is None):
            return None, 0

        # Cast that kth element is in the right substree
        leftPreorderNode, numNodesLeft = self.preorder(root.left, k)
        if (leftPreorderNode):
            return leftPreorderNode, -1
        
        # Case root is kth element
        if (numNodesLeft == k-1):
            return root, -1

        # Case that kth element is in the left subtree
        rightPreorderNode, numNodesRight = self.preorder(root.right, k-numNodesLeft-1)
        if (rightPreorderNode):
            return rightPreorderNode, -1
            
        return None, numNodesLeft+numNodesRight+1

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        node, _ = self.preorder(root, k)
        return node.val