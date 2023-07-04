/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let candidates = new Set(nums);
    let encountered = new Set();

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (encountered.has(val)) {
            candidates.delete(val);
        } else {
            encountered.add(val);
        }
    }
    return Array.from(candidates)[0];
};