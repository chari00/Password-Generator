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

// const charSet = specialCharacters.concat(
//   numericCharacters,
//   upperCasedCharacters,
//   lowerCasedCharacters
// );

let passLength = 0;
let passLengthResponse = "";
let specialCharRequired = "";
let upperCaseRequired = "";
let lowerCaseRequired = "";
let numericRequired = 0;
let optionsValid = false;
let constructPassword = "";

function getPasswordOptions() {
  let passLengthResponse = prompt("What length of password do you require?");
  passLength = Number(passLengthResponse);
  if (passLength > 9 && passLength < 65) {
    //passLengthResponse = charSet.length < 10 || charSet.length > 64;
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
// function getRandom(arr) {
function getRandom(arr) {
  randomCharArr = Math.floor(Math.random() * arr.length);
  // random((arr[0] && arr[arr.length]));
  console.log("random  " + arr[randomCharArr]);
  console.log("length  " + arr.length);
  console.log("arr  " + randomCharArr);

  return arr[randomCharArr];
}

// for (let i = 0; i < passLength; i++) {
//   //   if (upperCasedCharacters === true) {
//   //   }
//   // console.log(randomCharArr);
//   return Math.floor(Math.random() * 64);
// }
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
  let constructPassword = "";
  let letterCount = 0;

  getPasswordOptions();
  if (optionsValid) {
    for (let i = 0; i < passLength; i++) {
      if (upperCaseRequired === true) {
        constructPassword = constructPassword + getRandom(upperCasedCharacters);
        letterCount = letterCount + 1;
        if (letterCount === passLength) {
          break;
        }
        //constructPassword = constructPassword + getRandom(upperCasedCharacters);
      }
      if (lowerCaseRequired === true) {
        constructPassword = constructPassword + getRandom(lowerCasedCharacters);
        letterCount = letterCount + 1;
        if (letterCount === passLength) {
          break;
        }
        //constructPassword = constructPassword + getRandom(lowerCasedCharacters);
      }
      if (numericRequired === true) {
        constructPassword = constructPassword + getRandom(numericCharacters);
        letterCount = letterCount + 1;
        if (letterCount === passLength) {
          break;
        }
        //constructPassword = constructPassword + getRandom(numericCharacters);
      }
      if (specialCharRequired === true) {
        constructPassword = constructPassword + getRandom(specialCharacters);
        letterCount = letterCount + 1;
        if (letterCount === passLength) {
          break;
        }
        //constructPassword = constructPassword + getRandom(specialCharacters);
      }
      // constructPassword += "5";
    }
    return constructPassword;
  }

  // return constructPassword;
  // let password = "";
  // for (let i = 0; i < passLength; i++) {
  //   if (upperCasedCharacters === true) {
  //   }
  // console.log(randomCharArr);
  //   password += "j";
  // }
  // return practicePassword;
  // }
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
