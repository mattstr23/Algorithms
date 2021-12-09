// Given a string, return true if the string is a palindrome
// Or false if it is not.
// Palindromes are strings that form the same word if it is reversed.
// DO! include spaces and punctuation in determining if the string is a palindrome.

// --Examples--
// palindrome("abba") === true
// palindrome("abcdefg") === false

function palindrome(str) {
	const reversed = str.split("").reverse().join("");
	return str === reversed;
}
console.log(palindrome("abba"));
