# @param {Integer} n
# @return {String[]}
def fizz_buzz(n)
    
    output = []
    
    (1..n).each do |x|
    if x % 3 == 0 && x % 5 == 0
        output.push("FizzBuzz")
    elsif x % 5 == 0
        output.push("Buzz")
    elsif x % 3 == 0
        output.push("Fizz")
    else 
       output.push("#{x}")
    end
    end
    return output
end