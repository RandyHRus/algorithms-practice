/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    
    let queue = [];

    queue.push([0,0, new Set(), 1]);


    while (queue.length > 0) {
        let node = queue.shift();
        let x = node[0];
        let y = node[1];
        let visited = node[2];
        let length = node[3];

        let key = x + "_" + y;

        if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length || visited.has(key) || grid[y][x] != 0) {
            continue;
        }

        if (x == grid[0].length - 1 && y == grid.length - 1) {
            return length;
        }

        let neighbours = [
            [x+1, y+1],
            [x+1, y-1],
            [x+1, y],
            [x, y+1],
            [x, y-1],
            [x-1, y+1],
            [x-1, y-1],
            [x-1, y]
        ];

        visited.add(key);

        neighbours.forEach((n) => {
            queue.push([n[0], n[1], visited, length+1])
        })
    }

    return -1;
};
