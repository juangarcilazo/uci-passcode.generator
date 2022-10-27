// Assignment Code
var generateBtn = document.querySelector("#generate");

//These variables specify what potential password options will be created with
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getRandomInteger(max) {
  return Math.ceil(Math.random() * (max))
}


function generatePassword() {
  // Function to generate password

var passwordLength = prompt('How many characters would you like your Password to be? (8min - 128max)', '9')
// Step 1 Ask if how many characters does the user want the password to be?

  if (passwordLength > 128 || passwordLength < 8) {
    alert('Invalid password length! Must be between 8 and 128 characters')
    return generatePassword();
    // if the password length greater than 128 or less than 8; alert that they need to RE-Do it
}
var useUppercase = confirm('Would you like to include Uppercase letters?')
// Step 2 Ask if the user wants to use uppercase

var useLowercase = confirm('Would you like to use Lowercase letters?')
// Step 3 Ask if the user wants to use lowercase

var useNumbers = confirm('Would you like to use Numbers?')
// Step 4 Ask if the user wants to use numbers

var useSpecialCharacters = confirm('Would you like to include Special Characters?')
// Step 5 Ask if the user wants to use special characters
   //console.log(passwordLength, useUppercase, useLowercase, useNumbers, useSpecialCharacters)


// Create the structure of potential characters
var potentialCharacters = [] 
if (useUppercase) {
    potentialCharacters = potentialCharacters.concat(uppercase)
  }
  if (useLowercase) {
    potentialCharacters = potentialCharacters.concat(lowercase)
  }
  if (useNumbers) {
    potentialCharacters = potentialCharacters.concat(numbers)
  }
  if (useUppercase) {
    potentialCharacters = potentialCharacters.concat(special)
  } 
  //if no options are selected they did it wrong and need to try again
  else {
    alert('Must select at Least 2 options, Try Again!')
    return generatePassword();
  }

  // Arrange the chosen answers into a random password that has the characters, numbers, and letters with the appropriate length.
  //Create the password of "passwordLength"
  var password = ''
  for (var i = 0; i < passwordLength; i++) {
    password = password + potentialCharacters[getRandomInteger(potentialCharacters.length)]
  }
  return password
}