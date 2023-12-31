class Solution:
    # Another solution I saw just memoizes the first occurence of the character, and compares all subsequent
    # occurences of that character with the first one. That solution is an improvement from the solution I have here.
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        _dict = {}
        for i, c in enumerate(s):
            if _dict.get(c, None):
                _dict[c].append(i)
            else:
                _dict[c] = [i]
        maxSubStringLength = -1
        for _, (c, indices) in enumerate(_dict.items()):
            _min = float("inf")
            _max = -float("inf")
            for i in indices:
                if i < _min:
                    _min = i
                elif i > _max:
                    _max = i
            length = _max - _min - 1
            if length > maxSubStringLength:
                maxSubStringLength = length
        return maxSubStringLength
