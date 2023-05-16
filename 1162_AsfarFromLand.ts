// Complexity
// Time: O(n^2)
// Space: O(n^2)

function maxDistance(grid: number[][]): number {
    interface cell {
        x: number;
        y: number;
    }

    class Queue<T> {
        private queue: T[];

        constructor() {
            this.queue = [];
        }

        enqueue(item: T) {
            this.queue.push(item);
        }

        dequeue(): T | undefined {
            if (!this.isEmpty()) {
                return this.queue.shift();
            } else {
                return undefined;
            }
        }

        isEmpty(): boolean {
            return this.queue.length == 0;
        }
    }

    function getNeighbours(c: cell): cell[] {
        let neighbours: cell[] = [];
        if (c.x > 0) neighbours.push({ x: c.x - 1, y: c.y });
        if (c.x < xSize - 1) neighbours.push({ x: c.x + 1, y: c.y });
        if (c.y > 0) neighbours.push({ x: c.x, y: c.y - 1 });
        if (c.y < ySize - 1) neighbours.push({ x: c.x, y: c.y + 1 });
        return neighbours;
    }

    let xSize = grid[0].length;
    let ySize = grid.length;

    let toCheck: Queue<{ c: cell; distanceFromLand: number }> = new Queue<{
        c: cell;
        distanceFromLand: number;
    }>();
    let currentMax = -1;

    // Iterate through all cells, and if it is land add to toCheck list
    // This is BFS, as we are using a queue
    for (let i = 0; i < xSize; i++) {
        for (let j = 0; j < ySize; j++) {
            if (grid[i][j] == 1) {
                toCheck.enqueue({ c: { x: i, y: j }, distanceFromLand: 0 });
                // mark as done
                grid[i][j] = -1;
            }
        }
    }

    // loop until to check is empty
    while (!toCheck.isEmpty()) {
        let check = toCheck.dequeue();
        if (check == undefined) throw new Error("something went wrong");

        let c: cell = check.c;
        let distance: number = check.distanceFromLand;

        // Keep track of current maximum
        if (distance > currentMax && distance != 0) currentMax = distance;

        // Add neighbours to toCheck
        {
            // get neighbours
            let neighbours: cell[] = getNeighbours(c);

            // add to toCheck if not checked already
            for (let n of neighbours) {
                if (grid[n.x][n.y] == 0) {
                    toCheck.enqueue({ c: n, distanceFromLand: distance + 1 });
                    // mark as done
                    grid[n.x][n.y] = -1;
                }
            }
        }
    }

    // return the distance
    return currentMax;
}
