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

let passLength = 0;
let passLengthResponse = "";
let specialCharRequired = "";
let upperCaseRequired = "";
let lowerCaseRequired = "";
let numericRequired = 0;
let optionsValid = false;
let constructPassword = "";

// Function to prompt user for password options

function getPasswordOptions() {
  let passLengthResponse = prompt("What length of password do you require?");
  passLength = Number(passLengthResponse);
  if (passLength > 9 && passLength < 65) {
    specialCharRequired = confirm("Do you require Special Characters?");
    upperCaseRequired = confirm("Do you require Uppercase Characters?");
    lowerCaseRequired = confirm("Do you require Lowercase Characters?");
    numericRequired = confirm("Do you require Numeric?");
    if (
      specialCharRequired ||
      upperCaseRequired ||
      lowerCaseRequired ||
      numericRequired
    ) {
      // all valid and ok to generate password
      optionsValid = true;
    } else {
      alert("At least one character type must be selected.");
    }
  } else {
    alert(
      "Password should be between 10 and 64 characters long. Please re-generate."
    );
  }
}
// Function for getting a random element from an array
//Generate a randome whole number from the array length starting at 0.
function getRandom(arr) {
  randomCharArr = Math.floor(Math.random() * arr.length);

  //Check the if the app is generating random length, random index of the array, and random password characters.
  //Clik the Generate Password and refresh the live server in every test.
  // console.log("length  " + arr.length);
  // console.log("arr  " + randomCharArr);
  // console.log("random character  " + arr[randomCharArr]);

  return arr[randomCharArr];
}

// Function to generate password with user input

function generatePassword() {
  let constructPassword = "";
  let charCount = 0;
  //For loop to generate password base to the character length  the user input.
  getPasswordOptions();
  if (optionsValid) {
    for (let i = 0; i < passLength; i++) {
      if (upperCaseRequired === true) {
        constructPassword = constructPassword + getRandom(upperCasedCharacters);
        charCount = charCount + 1;
        if (charCount === passLength) {
          break;
        }
      }
      if (lowerCaseRequired === true) {
        constructPassword = constructPassword + getRandom(lowerCasedCharacters);
        charCount = charCount + 1;
        if (charCount === passLength) {
          break;
        }
      }
      if (numericRequired === true) {
        constructPassword = constructPassword + getRandom(numericCharacters);
        charCount = charCount + 1;
        if (charCount === passLength) {
          break;
        }
      }
      if (specialCharRequired === true) {
        constructPassword = constructPassword + getRandom(specialCharacters);
        charCount = charCount + 1;
        if (charCount === passLength) {
          break;
        }
      }
    }
    return constructPassword;
  }
}
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passGenerated(password) {
  return alert(passGenerated);
}
