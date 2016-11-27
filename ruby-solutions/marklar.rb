# Assumptions:
# special character is at the end of the word

def marklar(str)
  words = str.split(' ')

  result = []

  words.each do |word|
    if word.length > 4
      if word === word.capitalize
        word = 'Marklar'
      elsif word.scan(/(\W)/)
        special_char = word[-1]
        word = "marklar#{special_char}"
      else
        word = 'marklar'
      end
    end
  
    result.push(word)
  end
    p result.join(' ')
end

marklar("The quick brown fox")
marklar("Down goes Frazier")
marklar("Monday is Martin Luther King day")
marklar("How is the weather today? I have not been outside.")