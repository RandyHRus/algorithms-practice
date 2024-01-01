class Solution:
    def findMinHelper(self, start: int, end: int, nums: List[int]) -> int:
        if start == end:
            return nums[start]
        i = start + floor((end - start)/4)
        j = start + floor((end - start)* 3/4)
        if nums[i] > nums[j]:
            return self.findMinHelper(i+1, j, nums)
        else:
            leftMin = self.findMinHelper(start, i, nums)
            rightMin = self.findMinHelper(j+1, end, nums)
            return leftMin if leftMin < rightMin else rightMin

    def findMin(self, nums: List[int]) -> int:
        return self.findMinHelper(0, len(nums)-1, nums)