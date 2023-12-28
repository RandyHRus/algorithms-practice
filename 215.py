class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # How to use heap
        # heapq.heappush(heap, val)
        # val = heapq.heappop(heap)
        #
        # I implemented the Heap solution, but the other solution is to use quick select.
        # Choose random pivot, and partition elements into left, mid, and right.
        # Elements in left is smaller than pivot, elements in Right is larger.
        # if k < len(left), we can recurse the algorithm on left. Do similar for right.
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)
        return heapq.heappop(heap)
