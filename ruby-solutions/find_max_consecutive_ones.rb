# @param {Integer[]} nums
# @return {Integer}
def find_max_consecutive_ones(nums)
  count = 0
  greedy = 0
  


  for num in nums
    if num == 1
      count += 1
    else
      count = 0
    end
    if count > greedy
      greedy = count
    end
  end
  return greedy

end

p find_max_consecutive_ones([1,1,0,1,1,1])
p find_max_consecutive_ones([1,0,1,1,0,1])