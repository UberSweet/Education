/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  return nums1
    .slice(0, m)
    .concat(nums2.slice(0, n))
    .sort((a, b) => a - b);
};

console.log(merge([3, 2, 5, 0, 1, 0], 2, [2, 5, 6], 3));

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
