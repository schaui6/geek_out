# Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this in place with constant memory.

# For example,
# Given input array nums = [1,1,2],

# Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.


# Psuedocode
# 2 pointers (i and j)
# greedy variable stores one number
# if greedy variable === j, delete from array

def remove_duplicates(nums)

  if nums.length < 2
    return nums.length
  end
  
  i = 0
  j = i + 1

    while j < nums.length  
        if nums[i] === nums[j]
          j+=1
        else
          i+=1  
          nums[i] = nums[j]  
          j+=1
        end
    end
  return i + 1
end

remove_duplicates([1,2,3])
remove_duplicates([1,1,2,3,3])
remove_duplicates([1,1,1,1])
remove_duplicates([1,1])