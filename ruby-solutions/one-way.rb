def one_way(str1, str2)
  dict = {}
  diff = 0

  str1.chars.map do |val|
    dict[val] = dict[val] ? dict[val] += 1 : 1
  end

  str2.chars.map do |val|
    dict[val] = dict[val] ? dict[val] += 1 : 1
  end

  p dict

  dict.keys.map do |key|
    if dict[key] % 2 != 0
      diff += 1
    end

  end
  diff <= 2 && str1.length - str2.length <= 1
end

p one_way("pale", "ple")
p one_way("pales", "pale")
p one_way("pale", "bale")
p one_way("pale", "bake")
p one_way("pale", "bakes")