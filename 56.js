/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    function mergeSort(start, end) {
        if (start === end) return [intervals[start]];
        if (end - start === 1) {
            if (intervals[start][0] > intervals[end][0]) return [intervals[end], intervals[start]];
            else return [intervals[start], intervals[end]];
        }

        let mid = Math.floor(end - (end-start)/2);
        const leftSorted = mergeSort(start, mid);
        const rightSorted = mergeSort(mid+1, end);

        let i = 0;
        let j = 0;
        let sorted = [];
        while (i < leftSorted.length && j < rightSorted.length) {
            if (leftSorted[i][0] < rightSorted[j][0]) {
                sorted.push(leftSorted[i]);
                i++;
            } else {
                sorted.push(rightSorted[j]);
                j++;
            }
        }
        while (i < leftSorted.length) {
            sorted.push(leftSorted[i]);
            i++;
        }
        while (j < rightSorted.length) {
            sorted.push(rightSorted[j]);
            j++;
        }
        return sorted;
    }

    let solution = [];
    let sorted = mergeSort(0, intervals.length-1);
    let interval = [sorted[0][0], sorted[0][1]];
    for (let i = 1; i < sorted.length; i++) {
        if (interval[1] >= sorted[i][0]) {
            interval = [interval[0], Math.max(interval[1], sorted[i][1])];
        }
        else {
            solution.push(interval);
            interval = [sorted[i][0], sorted[i][1]];
        }
    }
    solution.push(interval);
    return solution;
};