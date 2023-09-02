// Define a JavaScript class called CascadingPalindrome for finding the longest palindromic substrings in a given input.
class CascadingPalindrome {
    // Constructor: Initialize the class with an input string and check if it's a valid string.
    constructor(inputStr) {
        if (typeof inputStr !== 'string') {
            throw new Error('Input must be a string');
        }
        this.inputStr = inputStr;
    }

    // Helper function to check if a string 's' is a palindrome.
    isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    // Helper function to find the longest palindromic substring in a string 's'.
    findLongestPalindrome(s) {
        let longestPalindrome = '';
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                const substring = s.substring(i, j + 1);
                if (this.isPalindrome(substring) && substring.length > longestPalindrome.length) {
                    longestPalindrome = substring;
                }
            }
        }
        return longestPalindrome;
    }

    // Main function to process the input string and find the longest palindromic substrings in its components.
    process() {
        const components = this.inputStr.split(' ');
        const palindromes = [];
        for (const component of components) {
            const palindrome = this.findLongestPalindrome(component);
            if (palindrome) {
                palindromes.push(palindrome);
            }
        }
        return palindromes.join(' ');
    }
}

// Example usage:
const examples = [
    '1230321',
    '1230321 09234 0124210',
    'abcd5dcba 1230321 09234 0124210',
    'racecar madam 12321',
    'hello world',
    '12321 54345',
    'level civic kayak 12321',
    'aabbccddeeffgghh',
    '123 456 789 101 121 111',
    '12344321 9876789 1234321',
];

// Loop through the examples, create a CascadingPalindrome instance for each, and find the longest palindromes.
for (const example of examples) {
    const palindromeFinder = new CascadingPalindrome(example);
    const longestPalindromes = palindromeFinder.process();
    console.log(`Input: '${example}'`);
    console.log(`Longest Palindromes: '${longestPalindromes}'`);
    console.log('-'.repeat(30));
}
