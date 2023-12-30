class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        # nlog(k) solution
        """
        solution = []
        # Keep max heap of items in current window
        # Item = (value: num, isActive: bool)
        heap = []

        def addToSolution(windowStart, windowEnd):
            while True: # Amortized O(1)
                maxItem = heap[0]
                if maxItem[1] >= windowStart and maxItem[1] <= windowEnd:
                    solution.append(-maxItem[0])
                    break
                heapq.heappop(heap) # O(log(k))
        
        for i in range(0, k):
            heapq.heappush(heap, (-nums[i], i))
        addToSolution(0, k-1)
        # i refers to index of the start of the window 
        for i in range(1, len(nums)-k+1): # O(n)
            heapq.heappush(heap, (-nums[i+k-1], i+k-1)) # O(log(k))
            addToSolution(i, i+k-1)
        return solution
        """

        # O(n) solution: Use deque
        n = len(nums)
        if n <= 1:
            return nums
        solution = []
        deq = deque([])
        for i in range(0, n):
            while len(deq) and nums[i] > deq[len(deq)-1]:
                deq.pop()
            deq.append(nums[i])
            if nums[i-k] == deq[0] and i >= k:
                deq.popleft()
            if len(deq) and i >= k-1:
                solution.append(deq[0])
        return solution
