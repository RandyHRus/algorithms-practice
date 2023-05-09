function jump(nums: number[]): number {
    // Use dynamic programming to store minimum number of jumps.
    let dp: { [index: number]: number } = {};

    if (nums.length == 0 || nums.length == 1) {
        return 0;
    }

    // Initialize dp
    dp[nums.length - 1] = 0;

    for (let i = nums.length - 2; i >= 0; i--) {
        dp[i] = Infinity;
        for (let j = i + 1; j <= Math.min(i + nums[i], nums.length - 1); j++) {
            let numJumpsRequired: number = 1 + dp[j];
            if (dp[i] == undefined || numJumpsRequired < dp[i]) {
                dp[i] = numJumpsRequired;
            }
        }
    }

    return dp[0];
}
