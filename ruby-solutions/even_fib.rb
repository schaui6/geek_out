# def even_fibonacci(nth)
#   count = nth - 3
#   i = 0
#   j = 1
#   fib = [i+1,j]

#   until count < 0
#     sum = fib[i] + fib[j]
#     fib.push(sum)
#     count-=1
#     i+=1
#     j+=1
#   end
#   even = []
#   fib.each do |num|
#     if num % 2 == 0
#       even.push(num)
#     end

#   end
#      even.inject {|sum, num| sum + num} 
# end

# even_fibonacci(5)
# even_fibonacci(11)
# even_fibonacci(19)
# even_fibonacci(35)


# Assumptions:
# index 0 = 0 and index 1 = 1






def even_fibonacci(nth)
  count = nth - 3
  i = 0
  fib = [i+1,i+1]
  even = []

  until count <= 0
    sum = fib[i] + fib[i + 1]
    fib.push(sum)
    even.push(sum) if sum % 2 == 0
    count-=1
    i+=1
  end
      
  even.reduce(:+)
end

# even_fibonacci(5)
# even_fibonacci(11)
# even_fibonacci(19)
# even_fibonacci(35)





# def even_fibonacci(nth)
#   sum_even_fib_index_array( return_even_fib_array(nth) )
# end

# def return_even_fib_array(nth)
#   count = nth - 3
#   i = 0
#   fib_array = [i+1,i+1]
#   even_fib_array = []

#   until count <= 0
#     sum = fib_array[i] + fib_array[i + 1]
#     fib_array.push(sum)
#     even_fib_array.push(sum) if sum % 2 == 0
#     count-=1
#     i+=1
#   end

#   return even_fib_array
# end

# def sum_even_fib_index_array(even_fib_array)
#   return even_fib_array.reduce(:+)
# end

p even_fibonacci(5)
p even_fibonacci(11)
p even_fibonacci(19)
p even_fibonacci(35)