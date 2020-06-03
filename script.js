// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var length = 5;

// create object with all parameters
var passwordObject = {
  passwordLength : length,
  lowerCase: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  upperCase: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ],
  numbers: [
    '1','2','3','4','5','6','7','8','9'
  ],
  special: [
    ' ',
    '!',
    '”',
    '#',
    '$',
    '%',
    '&',
    '’',
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    "\\",
    ']',
    '^',
    '_',
    '`',
    '{',
    '|',
    '}',
    '~'
  ]
}
console.log(passwordObject.special[2]);




function generatePassword(){
  // Get length, must be between 8 and 128 characters and must not be a number/not empty/not skipped
  while(isNaN(length) || length < 8 || length > 128){
    var length = parseInt(prompt("Please enter the length of the password. It must be a number from 8 to 128", ""));
    console.log(length);
  };

  // prompt for lower case
  var lowerCase = confirm("Include lower case characters?");

  // prompt for upper case
  var upperCase = confirm("Include upper case characters?");

  // prompt for numeric
  var numeric = confirm("Include numeric characters?");

  // prompt for special characters
  var special = confirm("Include special characters?");


  var combine = length + " " + lowerCase + " " + upperCase + " " + numeric + " " + special;
  
  return combine;
}

/*
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/