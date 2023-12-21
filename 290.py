class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        array = s.split()
        dict = {}
        se = set()
        if (len(array) != len(pattern)):
            return False
        for idx, c in enumerate(pattern):
            if dict.get(c):
                if dict.get(c) != array[idx]:
                    return False
            else:
                if array[idx] in se:
                    return False
                dict[c] = array[idx]
                se.add(array[idx])
        return True