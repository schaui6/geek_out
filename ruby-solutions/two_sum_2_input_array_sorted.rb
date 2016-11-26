# Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

# The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

# You may assume that each input would have exactly one solution.

# Input: numbers={2, 7, 11, 15}, target=9
# Output: index1=1, index2=2

# Psuedocode
# create an empty array
# loop with 2 pointers( the first element and the last element)
#  create a sum variable
#  if sum is equal to the target assign i and j as the index number
#  if the sum is less than the target, add 1 to i to point to the next index
#  if the sum is greater than the target subract 1 from j to point to the next to last element 
def two_sum(numbers, target)
  results = []

  if numbers === nil || numbers.length === 0
   return results
  end

  i = 0
  j = numbers.length - 1

  while i < j
    sum = numbers[i] + numbers[j]
    if sum === target
      results[0] = i + 1
      results[1] = j + 1
      break
    elsif sum < target
      i+=1
    else
      j-=1
    end
  end  
  p results    
end

two_sum([2,7,11,15], 9)
two_sum([2,3,11,15], 18)
two_sum([2,5,11,25, 30], 30)