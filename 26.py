class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        replaceIdx = 0
        prevNum = None
        for idx, num in enumerate(nums):
            if not prevNum == num:
                nums[replaceIdx] = num
                replaceIdx+=1
            prevNum = num
        return replaceIdx