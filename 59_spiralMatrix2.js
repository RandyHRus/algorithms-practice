/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    let left = 0;
    let right = n-1;
    let top = 0;
    let bottom = n-1;

    let grid = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(-1);
        }
        grid.push(row);
    }

    let curX = 0;
    let curY = 0;
    let index = 1;

    while (true) {

        while (curX <= right) {
            grid[curY][curX] = index;
            index++;
            if (curX == right) {
                top +=1;
                curY+=1;
                break;
            } else {
                curX+=1;
            }
        }

        if (top > bottom) break;

        while (curY <= bottom) {
            grid[curY][curX] = index;
            index++;
            if (curY == bottom) {
                right -= 1;
                curX-=1;
                break;
            } else {
                curY+=1;
            }
        }

        if (left > right) break;

        while (curX >= left) {
            grid[curY][curX] = index;
            index++;
            if (curX == left) {
                bottom -=1;
                curY-=1;
                break;
            } else {
                curX-=1;
            }
        }

        if (top > bottom) break;

        while (curY >= top) {
            grid[curY][curX] = index;
            index++;
            if (curY == top) {
                left += 1;
                curX+=1;
                break
            } else {
                curY-=1;
            }
        }

        if (left > right) break;
    }

    return grid;
}; 