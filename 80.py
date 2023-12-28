class Solution:
    # Modifying the array during the loop may have unexpected consequences.
    # I need to make sure to implement the algorithm in a way that I am not accessing elements modified during the loop.

    def removeDuplicates(self, nums: List[int]) -> int:
        appendCount = 0
        prevNum = None
        replaceIdx = 0
        for num in nums:
            if prevNum == num:
                appendCount = 2
            else:
                while appendCount > 0:
                    nums[replaceIdx] = prevNum
                    replaceIdx+=1
                    appendCount-=1
                prevNum = num
                appendCount = 1
        while appendCount > 0:
            nums[replaceIdx] = prevNum
            replaceIdx+=1
            appendCount-=1 
        return replaceIdx