class Solution:
    def compress(self, chars: List[str]) -> int:

        prevChar = None
        prevCount = 0
        replaceIdx = 0

        def add(replaceIdx, char, count):
            chars[replaceIdx] = char
            replaceIdx += 1
            if count > 1:
                nums = []
                while count > 0:
                    reminder = count % 10
                    count = (count - reminder) // 10
                    nums.append(str(reminder))
                for num in reversed(nums):
                    chars[replaceIdx] = num
                    replaceIdx += 1
            return replaceIdx

        for i, char in enumerate(chars):
            if prevChar and not prevChar == char:
                replaceIdx = add(replaceIdx, prevChar, prevCount)
                prevCount = 0
            prevCount += 1
            prevChar = char
        if prevChar:
            replaceIdx = add(replaceIdx, prevChar, prevCount)
        return replaceIdx
