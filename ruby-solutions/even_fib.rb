# def even_fibonacci(nth)
#   count = nth - 2
#   i = 0
#   j = 1
#   fib = [i,j]

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
#      even.inject {|sum, n| sum + n} 
# end

# even_fibonacci(5)
# even_fibonacci(11)
# even_fibonacci(19)
# even_fibonacci(35)


# Assumptions:
# index 0 = 0 and index 1 = 1






# def even_fibonacci(nth)
#   count = nth - 2
#   i = 0
#   fib = [i,i+1]

#   until count <= 0
#     sum = fib[i] + fib[i + 1]
#     fib.push(sum)
#     count-=1
#     i+=1
#   end

#   even = []
#   fib.each { |num| even.push(num) if num % 2 == 0 }
      
#    even.reduce(:+)
# end

# even_fibonacci(5)
# even_fibonacci(11)
# even_fibonacci(19)
# even_fibonacci(35)





def even_fibonacci(nth)
  sum_even_fib_index_array( even_fib_index_array( return_fib_seq_array(nth) ) )
end

def return_fib_seq_array(nth)
  count = nth - 2
  i = 0
  fib_array = [i,i+1]

  until count <= 0
    sum = fib_array[i] + fib_array[i + 1]
    fib_array.push(sum)
    count-=1
    i+=1
  end

  return fib_array
end

def even_fib_index_array(fib_array)
  even = []
  fib_array.collect! { |num| even.push(num) if num % 2 == 0 }
  return even
end

def sum_even_fib_index_array(even_fib_array)
  return even_fib_array.reduce(:+)
end

p even_fibonacci(5)
p even_fibonacci(11)
p even_fibonacci(19)
p even_fibonacci(35)