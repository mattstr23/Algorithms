// Given an integer, return an integer that is the reverse ordering of numbers.

// Effective method
function reverseInt(n) {
	const flipped = n.toString().split("").reverse().join("");
	return parseInt(flipped) * Math.sign(n);
}

// For other methods of reversal, check out lessons 1,2

console.log(reverseInt(16));
console.log(reverseInt(12724));
console.log(reverseInt(-23));
console.log(reverseInt(-26512));
