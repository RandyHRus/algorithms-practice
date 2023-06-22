/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if (nums.length == 1) {
        return nums[0]
    }

    let robFirstHouse = robHelper(nums.slice(0, nums.length-1), 0, {});
    let dontRobFirstHouse = robHelper(nums, 1, {})
    return Math.max(robFirstHouse, dontRobFirstHouse);
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