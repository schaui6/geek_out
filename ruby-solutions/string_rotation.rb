def is_substring(s1,s2)
  output = {}
  diff = 0

  s1.chars.map do |val|
    output[val] = (output[val]) ? output[val] += 1 : 1
  end

  s2.chars.map do |val|
    output[val] = (output[val]) ? output[val] += 1 : 1
  end

  output.keys.map do |key|
    if output[key] % 2 != 0
      diff += 1
    end
  end

  diff <= 0
end

p is_substring("waterbottle", "erbottlewat")
p is_substring("waterbottle", "erbottlewats")