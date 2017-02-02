# @param {Integer} num
# @return {Integer}
def find_complement(num)
    i = 1
    while i <=num
      i = i << 1
    end

    return (i-1)^ num
end

p find_complement(1)
p find_complement(5)