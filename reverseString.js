// Given a String, return a new string with the reversed order of characters

// --Examples--
// reverse("apple") === "elppa"
// reverse("hello") === "olleh"
// reverse("Greetings!") === "!sgniteerG"

// Simple JS built in reverse method
function reverse(str) {
	return str.split("").reverse().join("");
}
console.log(reverse("apple"));
console.log(reverse("hello"));
console.log(reverse("Greetings!"));

// Looping method
function reverse(str) {
	let reversed = "";
	for (let character of str) {
		reversed = character + reversed;
	}
	return reversed;
}
console.log(reverse("Matthew"));
console.log(reverse("Hanna"));
console.log(reverse("Charlie"));

// Reduce ES5 method
function reverse(str) {
	return str.split("").reduce((rev, char) => char + rev, "");
}
console.log(reverse("Darlene"));
console.log(reverse("Philip"));
console.log(reverse("Scott"));
