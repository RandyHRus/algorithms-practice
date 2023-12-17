/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let solution = [];
    let i = 0;
    if (intervals.length === 0) return [newInterval];
    while (i < intervals.length) {
        let interval = [intervals[i][0], intervals[i][1]];
        let doBreak = false;
        if (newInterval[0] < intervals[i][0] && newInterval[1] >= intervals[i][0]) {
            interval[0] = newInterval[0];
            doBreak = true;
        }
        if (newInterval[0] <= intervals[i][1] && newInterval[1] > intervals[i][1]) {
            interval[1] = newInterval[1];
            doBreak = true;
        }
        if (doBreak) {
            while (i < intervals.length) {
                if (i === intervals.length - 1) {
                    solution.push(interval);
                    ++i;
                    break;
                } else if (interval[1] >= intervals[i+1][0]) {
                    interval[1] = Math.max(interval[1], intervals[i+1][1]);
                    ++i;
                } else {
                    solution.push(interval);
                    ++i;
                    break;
                }
            }
            while (i < intervals.length) {
                solution.push(intervals[i]);
                ++i;
            }
            break;
        }
        // No overlap before.
        if (i === 0 && newInterval[1] < intervals[i][0]) {
            solution.push(newInterval);
        }
        solution.push(interval);
        // No overlap after.
        if (newInterval[0] > intervals[i][1] && 
            (i+1 >= intervals.length || 
            (newInterval[1] < intervals[i+1][0]))) {
                solution.push(newInterval); 
            }
        ++i;
    }
    return solution;
};