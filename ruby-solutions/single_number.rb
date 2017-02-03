# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
 dict = {}

 nums.map do |num|
   dict[num] = dict[num] ? dict[num] += 1 
 end
 p dict

end

single_number([1,1,2,3,3,4,4])