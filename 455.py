class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        gSorted = sorted(g)
        sSorted = sorted(s)
        gIndex = 0
        content = 0
        for size in sSorted:
            if gIndex == len(gSorted):
                break
            if gSorted[gIndex] > size:
                continue
            content += 1
            gIndex += 1
        return content