class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # Move the elements in num1 to end of array
        for i in range(m-1, -1, -1):
            nums1[n+i] = nums1[i]
        i = 0
        j = 0
        while (i < m and j < n):
            if (nums1[n+i] < nums2[j]):
                nums1[i+j] = nums1[n+i]
                i+=1
            else:
                nums1[i+j] = nums2[j]
                j+=1
        while (i < m):
            nums1[i+j] = nums1[n+i]
            i+=1
        while (j < n):
            nums1[i+j] = nums2[j]
            j+=1