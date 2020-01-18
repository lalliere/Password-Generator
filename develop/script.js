let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

function writePassword() {
    prompts();
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
}

let length = 0;
let special = false;
let numbers = false;
let lowercase = false;
let uppercase = false;

function prompts() {
    checkLength();
    special = confirm("Click OK to confirm using special characters in your password.");
    numbers = confirm("Click OK to confirm using numbers in your password.");
    lowercase = confirm("Click OK to confirm using lowercase letters in your password.");
    uppercase = confirm("Click OK to confirm using uppercase letters in your password.");
}

function checkLength() {
    length = parseInt(prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128."));
    if ((length < 8) || (length > 128)) {
        alert("Please input a valid length for your password.");
        checkLength();
    }
}

//blank array 
let pass = [];

//choices arrays
let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "[", "]", "<", ">", "?", ".", ","];
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function push() {
    //if user confirms they want special characters, add the characters array to the blank "pass" array
    if (special) {
        pass.push(characters);
    }

    //if user confirms they want numbers, add the digits array to the blank "pass" array
    if (numbers) {
        pass.push(digits);
    }

    //if user confirms they want lowercase letters, add the smallLetters array to the blank "pass" array
    if (lowercase) {
        pass.push(smallLetters);
    }

    //if user confirms they want uppercase letters, add the bigLetters array to the blank "pass" array
    if (uppercase) {
        pass.push(bigLetters);
    }
}

function generatePassword() {
    let passString = "";
    for (i = 0; i < length; i++) {
        push();
        if (pass.length === 0) {
            alert("Please select at least one character type to be in your password. Push the Generate Password button and try again.")
        }
        let randomChoices = pass[Math.floor(Math.random() * pass.length)];
        let selection = randomChoices[Math.floor(Math.random() * randomChoices.length)];
        
        passString += selection;
    }
    return passString;
}

function copyPassword () {
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}




generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);

