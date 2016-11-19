def subtract_from_array(list, num)
  len = list.count
  if len === 1 
    return [list[0] - num]
    
  elsif len > 1
    curr = list[len-1] - num
    if curr < 0
      list[len - 1] = curr + 10
      list[len - 2] = list[len - 2] - 1
      return list
    end
  else
    list[len-1] = curr
    return list
  end


end

p subtract_from_array([1], 8)
p subtract_from_array([10], 8)
p subtract_from_array([1,7], 8)
p subtract_from_array([1,7, 1], 8)