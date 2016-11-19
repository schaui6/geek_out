## Ruby Notes

# Ruby is written in C

# How many times does Ruby reads and transforms code before running it?
* 3 times.
1.  Ruby tokenizes your code, which means it reads the text characters in your code file and converts them into tokens, the words used in the Ruby
www.it-ebooks.info
language.
2. Next, Ruby parses these tokens; that is, it groups the tokens into meaningful Ruby statements just as one might group words into sentences.
3. Finally, Ruby compiles these statements into low-level instructions that it can execute later using a virtual machine.
![alt tag](/rb-notes/imgs/code2bits.png)
