class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:

        def calculateHours(k):
            totalHours = 0
            for p in piles:
                totalHours += ceil(p/k)
            return totalHours

        def binarySearch(start, end):
            if start > end:
                return None
            #if start == end:
            #    return start
            mid = start + floor((end-start)/2)
            hours = calculateHours(mid)
            res = None
            if hours > h:
                res = binarySearch(mid+1, end)
            elif hours <= h:
                res =  binarySearch(start, mid-1)
            if res is None and hours <= h:
                return mid
            return res

        return binarySearch(1, pow(10, 9))
