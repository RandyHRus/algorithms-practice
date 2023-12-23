# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        self.sol = head

        def removeNthFromEndHelper(head, n, prev) -> int:
            if head is None:
                return 0
            numberOfNodesAhead = removeNthFromEndHelper(head.next, n, head)
            if numberOfNodesAhead == (n-1):
                if prev is None:
                    if (head.next is None):
                        self.sol = None
                    else:
                        self.sol = head.next
                else:
                    prev.next = head.next
            return numberOfNodesAhead+1

        removeNthFromEndHelper(head, n, None)
        return self.sol