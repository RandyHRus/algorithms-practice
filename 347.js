/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const buckets = new Array(nums+1).map(() => null);
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let elem = nums[i];
        let freq;
        if (map[elem] === undefined) freq = 1;
        else freq = map[elem]+1;
        map[elem] = freq;
        if (!buckets[freq]) buckets[freq] = [];
        buckets[freq].push(elem);
    }
    let sol = new Set();
    for (let i = buckets.length; i >= 0; i--) {
        if (!buckets[i]) continue;
        for (let j = 0; j < buckets[i].length; j++) {
            let elem = buckets[i][j];
            sol.add(elem);
        }
        if (sol.size === k) break;
    }
    return Array.from(sol);
};