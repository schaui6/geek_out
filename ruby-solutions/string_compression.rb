def string_compression(str)
  count = 1
  output = []
  (0..str.length-1).each do |i|
    if str[i] != str[i+1]
      output[i] = "#{str[i]}#{count}"
      count = 1
    else
      count += 1
    end

  end
  output.join("")

end

p string_compression("aabcccccaaa")