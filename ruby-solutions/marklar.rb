# Assumptions:
# special character is at the end of the word

def marklar(str)
  words = str.split(' ')

  output = []

  words.each do |word|
    if word.length > 4
      if word === word.capitalize
        word = 'Marklar'
        output.push(word)
      elsif /(\W)/ === word
        special_char = word[-1]
        word = "marklar#{special_char}"
        output.push(word)
      else
        word = 'marklar'
        output.push(word)
      end
    else
      output.push(word)
    end
  end
    return output.join(' ')
end

marklar("The quick brown fox")
marklar("Down goes Frazier")
marklar("Monday is Martin Luther King day")
marklar("How is the weather today? I have not been outside.")