class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # Slow, because we have to sort the substring every loop
        # Time complexity: n * log(|s1|log|s1|)
        """
        sortedS1 = sorted(s1)
        for i in range(0, len(s2) - len(s1) + 1):
            subStr = s2[i:i+len(s1)]
            if sortedS1 == sorted(subStr):
                return True
        return False
        """
        # Solution below beats 96%
        nonZeroCount = 0
        charCounts = {}
        # Returns change in nonZeroCount
        def updateCharCount(c, dec: bool):
            amount = -1 if dec else 1
            charCounts[c] += amount
            if charCounts[c] == 0:
                return -1
            if charCounts[c] == amount:
                return 1
            return 0
        if (len(s1) > len(s2)):
            return False
        for c in s1:
            if charCounts.get(c, None) is None:
                charCounts[c] = 1
                nonZeroCount += 1
            else:
                charCounts[c] += 1
        for i in range(0, len(s1)):
            c = s2[i]
            if not charCounts.get(c, None) == None:
                nonZeroCount += updateCharCount(c, True)
        if nonZeroCount == 0:
            return True
        for i in range(0, len(s2) - len(s1)):
            removeChar = s2[i]
            addChar = s2[i + len(s1)]
            if not charCounts.get(removeChar, None) == None:
                nonZeroCount += updateCharCount(removeChar, False)
            if not charCounts.get(addChar, None) == None:
                nonZeroCount += updateCharCount(addChar, True)
            if nonZeroCount == 0:
                return True
        return False

