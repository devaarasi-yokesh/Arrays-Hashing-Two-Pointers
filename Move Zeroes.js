var moveZeroes = function(nums) {
    let nonZeroIndex = 0;

    // Step 1: Move all non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Step 2: Fill remaining spaces with zeroes
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
