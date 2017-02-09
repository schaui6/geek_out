def swap(str, i, j)
  temp = str[i]  #0-s
  str[i] = str[j] #0-g
  str[j] = temp
end



def reverse(str)
  i = 0; j = str.length - 1
  while i < j
    swap(str, i, j)
    i+=1
    j-=1
  end
  str
end

def reverse2(str)
  n = str.length
  i = 0
  while i < n/2
    swap(str, i, n-i-1)
    i+=1
  end
  str
end

p reverse(["s", "t", "r", "i", "n", "g"])
p reverse2(["s", "t", "r", "i", "n", "g","a"])