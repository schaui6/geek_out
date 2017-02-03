# @param {Integer} num
# @return {Integer}
def add_digits(num)
  while num >= 10
    temp = 0
    while num > 0
      temp += num % 10
      num /= 10
    end
    num = temp
  end
  return num
end

p add_digits(38)
p add_digits(199)