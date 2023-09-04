/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    if (nums.length == 1) {
        return nums;
    }

    let startReverseIndex = 0;
    
    for (let i = nums.length-1; i >=0; i--) {
        if (nums[i] < nums[i+1]) {
            let temp = nums[i];
            let nextGreatest = null;
            for (let j = nums.length-1; j > i; j--) {
                if (nums[j] > nums[i]) {
                    nextGreatest = j;
                    break;
                }
            }
            nums[i] = nums[nextGreatest];
            nums[nextGreatest] = temp;
            startReverseIndex = i+1;
            break;
        }
    }
    for (let i = startReverseIndex; i < startReverseIndex + Math.floor((nums.length - startReverseIndex)/2); i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length - 1 - (i - startReverseIndex)]; 
        nums[nums.length - 1 - (i - startReverseIndex)] = temp;
    }

    return nums
};  