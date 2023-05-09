function searchRange(nums: number[], target: number): number[] {
    if (nums.length == 0) {
        return [-1, -1];
    }
    return searchRangeHelper(nums, target, 0, nums.length - 1);
}

function searchRangeHelper(
    nums: number[],
    target: number,
    startIdx: number,
    endIdx: number
) {
    if (startIdx == endIdx) {
        if (nums[startIdx] == target) {
            return [startIdx, endIdx];
        } else {
            return [-1, -1];
        }
    } else if (endIdx - startIdx == 1) {
        let result: number[] = [-1, -1];
        if (nums[startIdx] == target) {
            result[0] = startIdx;
        } else if (nums[endIdx] == target) {
            result[0] = endIdx;
        }

        if (nums[endIdx] == target) {
            result[1] = endIdx;
        } else if (nums[startIdx] == target) {
            result[1] = startIdx;
        }
        return result;
    }

    let midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    let leftResult = searchRangeHelper(nums, target, startIdx, midIdx);
    let rightResult = searchRangeHelper(nums, target, midIdx + 1, endIdx);

    if (leftResult[1] == -1) {
        return rightResult;
    } else if (rightResult[1] == -1) {
        return leftResult;
    } else {
        return [leftResult[0], rightResult[1]];
    }
}
