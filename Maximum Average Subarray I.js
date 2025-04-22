function findMaxAverage(nums, k){
  let windowSum = 0;

// Sum of initial k elements
for(let i = 0; i < k; i++){
  windowSum += nums[i];
}

// Assume it as max
let maxSum = windowSum;

// Sliding window
for(let i=0; i < nums.length; i++){
  windowSum += nums[i] - nums[i - k]; // Add next remove first 
  maxSum = Math.max(maxSum, windowSum);
}
  
return maxSum / k;

}
