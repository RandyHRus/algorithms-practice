class Solution:
    # O(n)
    def minWindow(self, s: str, t: str) -> str:
        left = 0
        required = {}
        min = float("inf")
        minStr = ""
        for char in t:
            freq = required.get(char, 0)
            required[char] = freq + 1
        for right in range(left, len(s)):
            freq = required.get(s[right], 0)
            required[s[right]] = freq - 1
            while (left < right and required[s[left]] < 0):
                required[s[left]]+=1
                left += 1
            reqSatisfied = True
            for _, (_, value) in enumerate(required.items()):
                if value > 0:
                    reqSatisfied = False
            if (reqSatisfied):
                length = right - left + 1
                if (length < min):
                    min = length
                    minStr = s[left:right+1] 
        return minStr
