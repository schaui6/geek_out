# @param {Integer} num
# @return {Integer}


# def add_digits(num)
#   while num >= 10
#     temp = 0
#     while num > 0
#       temp += num % 10
#       num /= 10
#     end
#     num = temp
#   end
#   return num
# end

# def add_digits(num)
#   num if num.to_s.length <= 1
  
#   while num >= 10
#     num = num.to_s.split("").map {|i| i.to_i}.inject {|sum, n| sum.to_i += n.to_i}
#   end
#   num
# end

# If an integer is like 100a+10b+c, then (100a+10b+c)%9=(a+99a+b+9b+c)%9=(a+b+c)%9
def add_digits(num)
  return 0 if num == 0
    
  return num % 9 if num % 9 != 0
end


p add_digits(38)
p add_digits(199)
