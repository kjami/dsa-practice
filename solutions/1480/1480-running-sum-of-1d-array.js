/**
 * Link: https://leetcode.com/problems/running-sum-of-1d-array/description/
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = function runningSum (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums;
};