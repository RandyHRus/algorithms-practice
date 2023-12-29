class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        n = len(nums)

        if len(nums) == 0:
            return []
        if len(nums) == 1:
            return [0]
        
        # Iterative solution
        solution = [1] * n
        solution[n-1] = 1
        for i in range(n-2, 0-1, -1):
            solution[i] = nums[i+1] * solution[i+1]
        leftProduct = nums[0]
        for i in range(1, len(nums)):
            solution[i] *= leftProduct
            leftProduct *= nums[i]
        return solution

        
        # Recursive solution (twice as slow as iterative)
        """
        solution = [None] * n
        # Returns product of nums[i ... n-1]
        def helper(i, leftProduct):
            if i == n - 1:
                solution[i] = leftProduct
                return nums[i]
            rightProduct = helper(i+1, leftProduct * nums[i])
            solution[i] = leftProduct * rightProduct
            return nums[i] * rightProduct

        helper(0, 1)
        return solution
        """