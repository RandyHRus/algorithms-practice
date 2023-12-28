class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # O(n*|str|)
        buckets = {}
        for s in strs:
            keyArray = [0] * 26
            for c in s:
                code = ord(c)-97
                keyArray[code]+=1
            key = str(keyArray)
            bucket = buckets.get(key, [])
            bucket.append(s)
            buckets[key] = bucket
        solution = []
        for b in buckets.values():
            solution.append(b)
        return solution