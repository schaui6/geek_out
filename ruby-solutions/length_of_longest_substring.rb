def length_of_longest_substring(s)
    p 0 if s == nil || s.length == 0

    map = {}
    length = 0
    max_length = length
    start = 0

    # # scan from left to right
    until start >= s.length
       i = start
       c = s[i]

       if map[c] != nil && map[c] >= start
        start = map[c] + 1 # start new search with repeated word's last location + 1
        length = i - start # real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
       end

       length+=1 # real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
       # set the longest substring
       max_length = length if length > max_length
       map[c] = i
       start = start + 1
    end
    p max_length
    
end

length_of_longest_substring("")
length_of_longest_substring("abcabccc")