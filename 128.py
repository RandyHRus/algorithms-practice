class Solution:

    class Node:
        def __init__(self, num: int):
            self.num = num
            self.next = None

    def longestConsecutive(self, nums: List[int]) -> int:

        longest = 0
        visited = {}
        se = set()
        for i in nums:
            se.add(i)

        def visit(node):
            if node in visited:
                return visited[node]
            if node not in se:
                return 0
            count = 1 + visit(node+1)
            visited[node] = count
            return count

        for i in nums:
            len = visit(i)
            if (len > longest):
                longest = len

        return longest
