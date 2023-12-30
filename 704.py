class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def searchHelper(nums: List[int], start: int, end: int, target: int) -> int:
            if (start > end):
                return -1
            mid = start + floor((end - start)/2)
            if nums[mid] < target:
                return searchHelper(nums, mid+1, end, target)
            if nums[mid] > target: 
                return searchHelper(nums, start, mid-1, target)
            return mid

        return searchHelper(nums, 0, len(nums)-1, target)