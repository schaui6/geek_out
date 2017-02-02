def check_permutation(a, b)
  return true if b.nil? || b.size == 0
  aa = a.to_s.split("")
  bb = b.to_s.split("")
  return false if b.size > a.size

  bb.each do |i|
    return false if !aa.include?(i)
  end
  true
end

p check_permutation("123", "1234")
p check_permutation("123", "1")