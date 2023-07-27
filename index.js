function isPalindrome(word) {
  // Write your algorithm here
// Convert the word to lowercase for case-insensitivity
  const lowerCaseWord = word.toLowerCase();

  // Initialize two pointers, one at the beginning and one at the end of the word
  let left = 0;
  let right = lowerCaseWord.length - 1;
  while (left < right) {
    if (lowerCaseWord[left] !== lowerCaseWord[right]) {
      return false; // If any characters don't match, it's not a palindrome
    }
    left++;
    right--;
  }

  return true; // All characters matched, it's a palindrome
 
}

/* 
  Add your pseudocode here
1. Convert the input word to lowercase to make it case-insensitive.
 2. Initialize two pointers, left and right, pointing to the start and end of the word, respectively.
3. While the left pointer is less than the right pointer:
   a. Compare the characters at the left and right pointers in lowercase.
   b. If the characters don't match, return false (it's not a palindrome).
   c. Increment the left pointer and decrement the right pointer to move towards the center of the word.
    4. If the loop completes without finding any non-matching characters, return true (it's a palindrome).

*/

/*
  Add written explanation of your solution here
  The function `isPalindrome` takes a word as input and returns true if the word is a palindrome,and false otherwise. 
  The function uses two pointers (left and right) that start from the beginning
  and the end of the word, respectively. It compares the characters at these positions in lowercase.
  If the characters don't match at any point during the iteration, it returns false, indicating that
  the word is not a palindrome. However, if all characters match, the function returns true, meaning
  that the word is indeed a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
