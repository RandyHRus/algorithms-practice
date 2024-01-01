class Solution:
    def searchHelper(self, start: int, end: int, nums: List[int], target: int) -> int:
        if start == end:
            return start if nums[start] == target else -1
        i = start + floor((end - start)/4)
        j = start + floor((end - start)* 3/4)
        if ((nums[i] > nums[j] and (target > nums[i] or target <= nums[j])) or 
        (nums[i] < nums[j] and (target > nums[i] and target <= nums[j]))):
            return self.searchHelper(i+1, j, nums, target)
        else:
            leftResult = self.searchHelper(start, i, nums, target)
            rightResult = self.searchHelper(j+1, end, nums, target)
            return leftResult if leftResult > -1 else rightResult

    def search(self, nums: List[int], target: int) -> int:
        return self.searchHelper(0, len(nums)-1, nums, target)