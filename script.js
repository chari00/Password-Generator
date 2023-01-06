// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// const charSet = [
//   specialCharacters +
//     numericCharacters +
//     upperCasedCharacters +
//     lowerCasedCharacters,
// ];
// charSet(specialCharacters);
// charSet(numericCharacters);
// charSet(upperCasedCharacters);
// charSet(lowerCasedCharacters);

// Function to prompt user for password options
//CONCAT ARRAYS
//const = ()

const charSet = specialCharacters.concat(
  numericCharacters,
  upperCasedCharacters,
  lowerCasedCharacters
);

console.log(charSet);

function getPasswordOptions() {}
if (charSet === true) {
} else {
  alert(console.log("At least 10 characters but no more than 64"));
  alert(console.log("Lowercase"));
  alert(console.log("Uppercase"));
  alert(console.log("Numeric"));
  alert(console.log("Special characters ($@%&*, etc)"));
}

console.log(getPasswordOptions);

// Function for getting a random element from an array
// function getRandom(arr) {
function getRandomCharSet() {
  return Math.floor(Math.random() * 64);
}
console.log(getRandomCharSet());

// function charSet() {
//   for (let i = 0; i < charSet.length; i++) {
//     console.log = charSet[i];
//   }
// }
// console.log(charSet);

// }

// function getRandom() {}
// console.log(Math.floor(Math.random() * 64));

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  // document.getElementsByTagName("placeholder").readOnly = false;

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
