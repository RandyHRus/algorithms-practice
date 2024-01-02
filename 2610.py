class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        _dict = {}
        solution = []
        for n in nums:
            idx = _dict.get(n, None)
            proposedNewIdx = None
            if idx is not None:
                proposedNewIdx = idx+1
            else:
                proposedNewIdx = 0
            if len(solution) <= proposedNewIdx:
                solution.append([n])
            else:
                solution[proposedNewIdx].append(n)
            _dict[n] = proposedNewIdx
        return solution