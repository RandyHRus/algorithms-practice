class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m = len(grid) # Number of rows
        n = len(grid[0]) # Number of cols

        def floodFill(x,y):
            if (x < 0 or y < 0 or x >= n or y >= m):
                return
            if visited[y][x]:
                return
            visited[y][x] = True
            if grid[y][x] == "0":
                return
            neighbours = [[1,0], [-1,0], [0,1], [0,-1]]
            for ne in neighbours:
                floodFill(x+ne[0], y+ne[1])
                
                
        numIslands = 0
        visited = [[False]*n for i in range(m)]
        for y in range(m):
            for x in range(n):
                if visited[y][x]:
                    continue
                if grid[y][x] == "1":
                    print("A: " + str(x) + "_" + str(y))
                    numIslands += 1
                    floodFill(x,y)
        return numIslands
                
