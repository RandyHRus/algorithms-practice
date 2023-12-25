class Solution:
    def LCS_helper(self, text1, text2, start1, start2, dp) -> int:
        if (start1 == len(text1) or start2 == len(text2)):
            return 0
        if (dp[start1][start2] is not None):
            return dp[start1][start2]
        sol = None
        if text1[start1] == text2[start2]:
            sol = 1 + self.LCS_helper(text1, text2, start1+1, start2+1, dp) 
        else:
            sol = max(
                self.LCS_helper(text1, text2, start1, start2+1, dp),
                self.LCS_helper(text1, text2, start1+1, start2, dp))
        dp[start1][start2] = sol
        return sol

    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        dp = [[None]*len(text2) for i in range(len(text1))]
        return self.LCS_helper(text1, text2, 0, 0, dp)