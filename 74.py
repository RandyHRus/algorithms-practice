class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        def searchRowHelper(rows: List[List[int]], start: int, end: int, target: bool) -> bool:
            if (start > end):
                return False
            mid = start + floor((end-start)/2)
            midRow = rows[mid]
            if midRow[0] > target:
                return searchRowHelper(rows, start, mid-1, target)
            if midRow[len(midRow)-1] < target:
                return searchRowHelper(rows, mid+1, end, target)
            return midRow
        
        def binarySearch(row: List[int], start: int, end: int, target: bool) -> bool:
            if (start > end):
                return False
            mid = start + floor((end-start)/2)
            if row[mid] > target:
                return binarySearch(row, start, mid-1, target)
            if row[mid] < target:
                return binarySearch(row, mid+1, end, target)
            return True


        # O(log(m * n)) = O(log(m) + log(n))
        m = len(matrix)
        n = len(matrix[0])
        row = searchRowHelper(matrix, 0, len(matrix)-1, target)
        if row:
            return binarySearch(row, 0, len(row)-1, target)
        return False
                
