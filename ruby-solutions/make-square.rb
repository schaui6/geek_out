# @param {Integer[]} nums
# @return {Boolean}
def makesquare(nums)
    total = nums.inject { |sum, num| sum + num } || 0 
    return total % 4 == 0

end