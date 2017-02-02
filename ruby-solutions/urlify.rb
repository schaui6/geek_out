# URLify : Write a method to replace all spaces in a string with '%20  You may assume that the string has sufficent space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)

def urlify(string, true_length)
  i = 0
  new_string = string[0..true_length-1].split("")

  new_string.each { |x| new_string[i] = "%20" if x === " "; i+=1 }

  new_string.join("")

end

# def urlify(string, true_length)
#   output = string[0..true_length-1].split(" ").join("%20")
# end

# def urlify(string, true_length)
#   string[0..true_length-1].gsub(" ", "%20")
# end

p urlify("Mr John Smith      ", 13)