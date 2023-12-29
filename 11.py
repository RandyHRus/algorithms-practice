class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        maxVolume = 0
        volume = None
        while not left == right:
            if height[left] > height[right]: 
                volume = height[right] * (right - left)
                right -= 1
            else:
                volume = height[left] * (right - left)
                left += 1
            if (volume > maxVolume):
                maxVolume = volume
        return maxVolume