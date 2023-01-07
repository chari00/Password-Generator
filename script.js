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

// Function to prompt user for password options
//CONCAT ARRAYS
//const = ()

const charSet = specialCharacters.concat(
  numericCharacters,
  upperCasedCharacters,
  lowerCasedCharacters
);
// specialCharacters = true;
// numericCharacters = true;
// upperCasedCharacters = true;
// lowerCasedCharacters = true;

let passLength = 0;
let passLengthResponse = "";
let specialCharRequired = "";
let upperCaseRequired = "";
let lowerCaseRequired = "";
let numericRequired = 0;

let password = "";

function getPasswordOptions() {
  let passLengthResponse = prompt("What lenght of password do you require?");
  passLength = Number(passLengthResponse);
  if (passLength > 9 && passLength < 65) {
    passLengthResponse = charSet.length < 10 || charSet.length > 64;
    specialCharRequired = confirm("Do you require Special Characters?");
    upperCaseRequired = confirm("Do you want Uppercase Characters?");
    lowerCaseRequired = confirm("Do you want Lowercase Characters?");
    numericRequired = confirm("Do you want Numeric?");
  } else {
    alert("Please enter a number between 10 and 64.");
  }

  // console.log(passLength);
  // if ([passLenght === true]) {
  // alert ("Please write a number between 10 and 64." )
  //   } else {
  //     alert ('Please enter a number between 10 and 64.')
}
// }
// console.log(getPasswordOptions);

// if (upperCasedCharacters === false) {
// } else {
//   alert("Must have Uppercase.");
// }
// if (lowerCasedCharacters === false) {
// } else {
//   alert("Must have Lowercase.");
// }
// if (numericCharacters === false) {
// } else {
//   alert("Must have Numeric.");
// }
// if (specialCharacters === false) {
// } else {
//   alert("Must have  characters ($@%&*, etc).");
// }
// if (minCharLen === false) {
// } else {
//   alert("password at least 10 characters but no more than 64.");
// }
// if (maxCharLen === false) {
// } else {
//   alert("password at least 10 characters but no more than 64.");
// }

// Function for getting a random element from an array
// function getRandom(arr) {
function getRandomCharSet() {
  return Math.floor(Math.random() * 64);
}
// console.log(getRandomCharSet());

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
function generatePassword() {
  let practicePassword = "";

  getPasswordOptions();

  for (let i = 0; i < passLength; i++) {
    practicePassword += "j";
  }

  return practicePassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  //should call validation??
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passGenerated(password) {
  return alert(passGenerated);
}
