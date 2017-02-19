# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
# def rotate(nums, k)
#   n = nums.length
#   i = k % n
#   output = nums[n-i..n-1] + nums[0...n-k]
#   output
# end

def rotate(nums, k)
  n = nums.length
  nums[-1..k] + nums[0...k]
end

p rotate([1,2,3,4,5,6,7], 3)
p rotate([1], 0)
p rotate([1,2], 1)
p rotate([1,2,3], 1)
