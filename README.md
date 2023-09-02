# zuri-cdt-two
# Question

A palindrome is a word, sentence, verse or number that reads the same backwards or forward. A typical palindrome class will accept a parameter such as a word or number and return true or false if the word is a palindrome. However, your task is to implement a cascading palindrome - a cascading palindrome in the context of this task means the following:

1. The class takes a parameter with several components. The parameter could be a word, a sentence, multiple numbers, etc. The parameter contains various items separated by space. 
2. The class determines the part of the parameter that is a palindrome and returns only the palindrome part of the parameter.
For clarity, consider these examples:

a. 1230321  returns 1230321
b. 1230321 09234 0124210 returns 1230321 0124210
c. abcd5dcba 1230321 09234 0124210 returns abcd5dcba 1230321 0124210

You can assume that the example structure above will always be the case for this task. For example, this sentence: "A man, a plan, a canal – Panama" is a palindrome; however, you don't need to consider such a case in your implementation.

While implementing a palindrome or even a cascading palindrome could be considered easy, the difficulty is efficiency. Your code needs to consider the following:

1. Efficiency: Use as little memory as possible
2. Speed: Ensure the fastest result regardless of how many components the parameter has
3. Validation: validation data given by users and return appropriate responses if invalid data is given
4. Error handling: return appropriate error messages when something goes wrong.

To help you with the four points above, consider watching and studying the following:

1. https://www.youtube.com/watch?v=iOq5kSKqeR4  (Asymptotic Notation)
2. https://www.youtube.com/watch?v=V6mKVRU1evU (Big O Notations)
3. https://www.youtube.com/watch?v=ei-A_wy5Yxw&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN&index=3 [(Big Oh Notation)(and Omega and Theta)]

While these videos will help you with the concepts mentioned, you can explore other sources for better understanding. 

In addition to the information already provided in this task, please note the following:

You are expected to use OOP so that your code is reusable
Leave proper commenting
Have at least ten examples defined in your code on how your class was used to determine and fetch out the palindrome in a given parameter.
Ensure you follow the feedback already provided at https://github.com/xyluz/feedback
 
Hint:

You'll see that for each word above, that is a palindrome. The letter in the centre forms the base of your check. If the letters on the right and to the left of the centre letter are not the same, then such a word is not a palindrome, and you'll not need to do any further checks. 

Submission:

Push your code to GitHub and submit the URL to the repository. Use unique names to save your files so it's easier to find your feedback. Consider having your student ID as part of your file names.