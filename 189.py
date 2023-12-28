class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = 0
        minReplacedIdx = float("inf")
        while (i < n and i < minReplacedIdx):
            num = nums[i]
            replaceIdx = (i+k) % n
            while (not replaceIdx == i):
                temp = nums[replaceIdx]
                nums[replaceIdx] = num
                if (replaceIdx < minReplacedIdx):
                    minReplacedIdx = replaceIdx
                num = temp
                replaceIdx = (replaceIdx+k) % n
            nums[i] = num
            i+=1
