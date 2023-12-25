class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # 10, 9, 2, 5, 3, 7, 101, 18
        # 1 10. 9. 2.
        # 2 5. 3.
        # 3 7
        # 4 101. 18
        LIS_for_size: List[int] = []
        for i in range(0, len(nums)):
            new_num = nums[i]
            inserted = False
            for j in range(0, len(LIS_for_size)):
                if (new_num <= LIS_for_size[j]):
                    LIS_for_size[j] = new_num
                    inserted = True
                    break
            if not inserted:
                LIS_for_size.append(new_num)
        return len(LIS_for_size)
                