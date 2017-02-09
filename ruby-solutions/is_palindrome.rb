# @param {String} s
# @return {Boolean}
def is_palindrome(s)
  dict = {}
  count = 0
  s.downcase.chars.map do |char|
    dict[char] = dict[char] ? dict[char] += 1 : 1
  end    
  p dict
  dict.keys.map do |key|
    count += 1 if dict[key] % 2 != 0
  end
  count <= 1
end

p is_palindrome("racecar")
p is_palindrome("a.")