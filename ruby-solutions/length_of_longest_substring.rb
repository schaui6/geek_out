# Given a string, find the length of the longest substring without repeating characters.

# Examples:

# Given "abcabcbb", the answer is "abc", which the length is 3.

# Given "bbbbb", the answer is "b", with the length of 1.

# Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

# def length_of_longest_substring(s)
#     return 0 if s == nil || s.length == 0

#     map = {}
#     length = 0
#     max_length = length
#     start = 0

#     # # scan from left to right
#     until start >= s.length
#        i = start
#        c = s[i]

#        if map[c] != nil && map[c] >= start
#         start = map[c] + 1 # start new search with repeated word's last location + 1
#         length = i - start # real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
#        end

#        length+=1 # real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
#        # set the longest substring
#        max_length = length if length > max_length
#        map[c] = i
#        start+=1
#     end
#     return max_length
    
# end

def length_of_longest_substring(s)

  greedy_count = 0 if s == nil || s.length == 0 
  
  ans = {}
  count = ans.count
  greedy_count = 0

  i = 0
  j = s.length

  while i < j
    if !ans[s[i]]
      # count += 1
      ans[s[i]] = 1
      p ans
      # p ans.count
      greedy_count = ans.count if ans.count > greedy_count
      # p greedy_count
    # else
      # ans[s[i]] += 1
      # count+=1
      # greedy_count = count if count > greedy_count
    #   # p ans
      # count = 0
    #   # p ans
    else
      # p ans
      ans = {}
      ans = Hash[s[i-1],1]
      # # greedy_count = ans.count if ans.count > greedy_count
      # p ans
    end
    i+=1
  end
  # p ans
  # greedy_count = count if count > greedy_count
  p greedy_count
  # p ans.count
end

# length_of_longest_substring("")
# length_of_longest_substring("abcabccc")
# length_of_longest_substring("bbbbb")
length_of_longest_substring("pwwkew")
# length_of_longest_substring("c")
length_of_longest_substring("dvdf")
