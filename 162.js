/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    return findPeakElementHelper(nums, 0, nums.length-1);
};

let findPeakElementHelper = function(nums, startIdx, endIdx) {

    if (startIdx > endIdx) {
        return null;
    }

    let mid = startIdx + (Math.floor((endIdx - startIdx) / 2));

    if ((!nums[mid - 1] || nums[mid] > nums[mid - 1]) && (!nums[mid+1] || nums[mid] > nums[mid+1])) {
        return mid;
    } else {
        if (nums[mid-1] && nums[mid-1] > nums[mid]) {
            return findPeakElementHelper(nums, startIdx, mid-1);
        } else {
            return findPeakElementHelper(nums, mid+1, endIdx);
        }
    }
}