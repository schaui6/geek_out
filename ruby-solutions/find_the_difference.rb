# @param {String} s
# @param {String} t
# @return {Character}
def find_the_difference(s, t)
  output = ""
  dict = {}
  s.chars.map do |val|
    dict[val] = dict[val] ? dict[val] += 1 : 1

  end
  t.chars.map do |val|
    dict[val] = dict[val] ? dict[val] += 1 : 1
  end


  dict.keys.map do |key|
    output << key if dict[key] % 2 != 0
  end

  output

end

p find_the_difference("abcd", "abcde")
p find_the_difference("a", "aa")