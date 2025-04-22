function twoSum(nums, target) {
  const map = new Map(); // to store number and its index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      // found the pair!
      return [map.get(complement), i];
    }

    map.set(nums[i], i); // store the current number and its index
  }

  return []; // if no solution found (not needed as per the problem)
}
