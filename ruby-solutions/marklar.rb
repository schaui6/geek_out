# Assumptions:
# special character is at the end of the word

def marklar(str)
  words = str.split(' ')

  result = []

  words.each do |word|
    if word.length > 4
      if word === word.capitalize
        word = 'Marklar'
        result.push(word)
      elsif /(\W)/ === word
        special_char = word[-1]
        word = "marklar#{special_char}"
        result.push(word)
      else
        word = 'marklar'
        result.push(word)
      end
    else
      result.push(word)
    end
  end
    return result.join(' ')
end

marklar("The quick brown fox")
marklar("Down goes Frazier")
marklar("Monday is Martin Luther King day")
marklar("How is the weather today? I have not been outside.")