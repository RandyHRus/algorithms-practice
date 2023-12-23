class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        count = 0
        latestEndTime = -float("inf")
        intervals = sorted(intervals, key=lambda item: item[1])
        for start, end in intervals:
            if start >= latestEndTime:
                latestEndTime = end
            else:
                count+=1
        return count