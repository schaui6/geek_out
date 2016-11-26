# Given two strings s and t, write a function to determine if t is an anagram of s.

# For example,
# s = "anagram", t = "nagaram", return true.
# s = "rat", t = "car", return false.

# Note:
# You may assume the string contains only lowercase alphabets.

# Follow up:
# What if the inputs contain unicode characters? How would you adapt your solution to such case?

# Psuedocode
# takes 2 strings
# loop through the first string
# keep count of each letter of of the first string
# loop through other string
# if the letter has a value of 0 or doesn't exist return false
# if the letter exists in the hash, subtract 1 from count

def is_anagram(s, t)

  return false if s.length != t.length
  
  letters = {}
  i = 0
  j = 0
  while i < s.length
    if !letters[s[i]]
      letters[s[i]] = 1
    else
      letters[s[i]] += 1
    end
    i+=1
  end

  while j < t.length
    if !letters[t[j]] ||  letters[t[j]] === 0
      return false
    else
      letters[t[j]]-=1
    end
    j+=1
  end
  return true
end

is_anagram('bob', 'bob')
is_anagram('anagram', 'nagaram')
is_anagram('rat', 'car')