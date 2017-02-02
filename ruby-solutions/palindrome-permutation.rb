# Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­drome. A palindrome is a word or phrase that is the same  forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
# EXAMPLE
# Input: Tact Coa
# Output: True (permutations: "taco cat", "atco eta", etc.)

def permutation_palindrome(str)
  dict = {}
  odds = 0

  str.downcase.chars.map do |val|
    dict[val] = (dict[val]) ? dict[val] += 1 : 1
  end
  
  dict.keys.map do |key|
    dict[" "] = 2 if key == " "
    odds += 1 if dict[key] % 2 != 0
  end

  return odds <= 1
end

p permutation_palindrome("racecar")
p permutation_palindrome("rraceca")
p permutation_palindrome("Tact Coa")
p permutation_palindrome("atco cta")
p permutation_palindrome("laptop")