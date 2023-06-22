/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    // dictionary that stores maximum value robbable from 
    // index i to nums.length-1;
    // key: house index
    // value: max money so far
    let dict = {};

    return robHelper(nums, 0, dict);
};

function robHelper(nums, startingIdx, dict) {
    if (startingIdx >= nums.length) {
        return 0;
    } else if (dict[startingIdx] != undefined) {
        return dict[startingIdx];
    }
    else {
        let robThisHouse = robHelper(nums, startingIdx+2, dict)+nums[startingIdx];
        let dontRobThisHouse = robHelper(nums, startingIdx+1, dict);
        let result = Math.max(robThisHouse, dontRobThisHouse);
        dict[startingIdx] = result;
        return result;
    }
}