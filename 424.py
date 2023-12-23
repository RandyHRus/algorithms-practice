class Solution:
    # Use sliding window
    # get maxFreq by iterating the dict. This ensures O(26) = O(1) for finding maxFreq. 
    def characterReplacement(self, s: str, k: int) -> int:
        freq = {}
        left = 0
        max = 0
        for right in range(left, len(s)):
            letter = s[right]
            letterFreq = freq.get(letter, 0)
            freq[letter] = letterFreq + 1
            maxFreq = -float("inf")
            for _, (_, v) in enumerate(freq.items()):
                if v > maxFreq:
                    maxFreq = v
            windowSize = right - left + 1
            if ((windowSize - maxFreq) > k):
                freq[s[left]]-=1
                left+=1
            else:
                if (windowSize > max):
                    max = windowSize
        return max