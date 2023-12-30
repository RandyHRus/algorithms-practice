class Solution:
    # Can be improved by keeping track of maxLeft and maxRight, this would eliminate having to remove overused spaces.
    def trap(self, height: List[int]) -> int:
        left = 0
        right = len(height)-1
        totalVolume = 0
        maxDepth = 0
        volumeToRemove = 0
        while not left == right:
            totalVolume -= volumeToRemove
            depth = min(height[left], height[right])
            if depth > maxDepth:
                totalVolume += (right - left - 1) * (depth - maxDepth)
                maxDepth = depth
            volumeToRemove = 0
            if height[left] < height[right]:
                left += 1
                volumeToRemove = min(maxDepth, height[left])
            else:
                right -= 1
                volumeToRemove = min(maxDepth, height[right])
        return totalVolume