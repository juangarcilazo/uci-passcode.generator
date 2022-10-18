// Assignment Code
var generateBtn = document.querySelector("#generate");

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

// Function to generate password
function generatePassword() {

  // Step 1 Ask if how many characters does the user want the password to be?
  var passwordLength = prompt('How many characters would you like your Password to be? (8min - 128max)', '9')
  console.log(passwordLength)
  // Step 2 Ask if the user wants to use uppercase
  var useUppercase = confirm('Would you like to include Uppercase letters?')
  console.log(useUppercase)
  // Step 3 Ask if the user wants to use lowercase
  var useLowercase = confirm('Would you like to use Lowercase letters?')
  console.log(useLowercase)
  // Step 4 Ask if the user wants to use numbers
  var useNumbers = confirm('Would you like to use Numbers?')
  console.log(useNumbers)
  // Step 5 Ask if the user wants to use special characters
  var useSpecialCharacters = confirm('Would you like to include Special Characters?')
  console.log(useSpecialCharacters)


  // Arrange the proper characters and letters and numbers, into a data structure, that we can extract 
  // a random character for each number of the length.

  // Create the structure of potential characters
  var potentialCharacters = []
  if (useUppercase) {
    potentialCharacters = potentialCharacters.concat(uppercase)
  }
  
  if (useLowercase ) {
  potentialCharacters = potentialCharacters.concat(lowercase)
  }
  
  if (useNumbers) {
  potentialCharacters = potentialCharacters.concat(numbers)
  }
  
  if (useSpecialCharacters) {
  potentialCharacters = potentialCharacters.concat(special)
  }
  console.log(potentialCharacters)
  
  //Create the password with proper length
  var password =''
  for (var i = 0; i < passwordLength; i++) {
    password[0]
  }
}