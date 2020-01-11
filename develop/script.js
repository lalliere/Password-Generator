// Assignment Code
let generateBtn = document.querySelector("#generate");

//User prompts
let length = parseInt(prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128."));
let special = confirm("Click OK to confirm using special characters in your password.");
let numbers = confirm("Click OK to confirm using numbers in your password.");
let lowercase = confirm("Click OK to confirm using lowercase letters in your password.");
let uppercase = confirm("Click OK to confirm using uppercase letters in your password.");

//blank array 
let pass = [];

//choices arrays
let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "[", "]", "<", ">", "?", ".", ","];
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//validate length of password; if outside of the parameters, alert the user
function checkLength () {
  if ((length < 8) || (length > 128)) {
    alert("Please input a valid length for your password.");
  }
}

checkLength()

//if user confirms they want special characters, add the characters array to the blank pass array
if (special) {
  pass.push(characters);
}

//if user confirms they want numbers, add the digits array to the blank pass array
if (numbers) {
  pass.push(digits);
}

//if user confirms they want lowercase letters, add the smallLetters array to the blank pass array
if (lowercase) {
  pass.push(smallLetters);
}

//if user confirms they want uppercase letters, add the bigLetters array to the blank pass array
if (uppercase) {
  pass.push(bigLetters);
}


//console.log(pass)

//randomly choose a value from the pass array; loop the same amount of times as the user designated length


//I need a function that takes the output of randomChoices and stores it in a string
function createPass(passOpts, passLength) {
  let passString = "";
  
  for (let i = 0; i < passLength; i++) {
    let randomChoices = passOpts[Math.floor(Math.random() * pass.length)][Math.floor(Math.random() * pass.length)]; 
    passString += randomChoices; 
  }
  
  return passString;

}

let randPass = createPass(pass, length);


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
