class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Optimal time complexity O(1)
        boardSize = 9
        rows = [set() for i in range(boardSize)]
        columns = [set() for i in range(boardSize)]
        subBoxes = [set() for i in range(boardSize)]
        for row in range(boardSize):
            subRow = ((row // 3) * 3)
            for column in range(boardSize):
                item = board[row][column]
                if item == ".":
                    continue
                subBox = subBoxes[subRow + (column // 3)]
                if item in rows[row] or item in columns[column] or item in subBox:
                    return False
                rows[row].add(item)
                columns[column].add(item)
                subBox.add(item)
        return True