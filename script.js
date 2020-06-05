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

// create object with all character options
var passwordObject = {
  passwordLength : length,
  lowerCase: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  upperCase: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ],
  number: [
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

function generatePassword(){
  var newPasswordCharacters = [];
  var newPassword = [];
  passwordObject.passwordLength = NaN;
  // Get length, must be between 8 and 128 characters and must not be a number/not empty/not skipped
  while(isNaN(passwordObject.passwordLength) || passwordObject.passwordLength < 8 || passwordObject.passwordLength > 128){
    passwordObject.passwordLength = parseInt(prompt("Please enter the length of the password. It must be a number from 8 to 128", ""));
  };

  // prompt for lower case
  var lowerCase = confirm("Include lower case characters?");

  // prompt for upper case
  var upperCase = confirm("Include upper case characters?");

  // prompt for numeric
  var number = confirm("Include numeric characters?");

  // prompt for special characters
  var special = confirm("Include special characters?");

  // error if no parameters are selected
  if (!lowerCase && !upperCase && !number && !special){
    alert("Error: You must choose atleast one parameter");
    return "No parameters selected.";
  }

  // Test each option and add possible characters to newPasswordCharacter array
  if(lowerCase){
    for(var i = 0; i < passwordObject.lowerCase.length; i++){
      newPasswordCharacters.push(passwordObject.lowerCase[i])
    }
  }

  if(upperCase){
    for(var i = 0; i < passwordObject.upperCase.length; i++){
      newPasswordCharacters.push(passwordObject.upperCase[i])
    }
  }

  if(number){
    for(var i = 0; i < passwordObject.number.length; i++){
      newPasswordCharacters.push(passwordObject.number[i])
    }
  }

  if(special){
    for(var i = 0; i < passwordObject.special.length; i++){
      newPasswordCharacters.push(passwordObject.special[i])
    }
  }

// Randomly choose possible characters from newPasswordCharacters array
for (var i = 0; i < passwordObject.passwordLength; i++){
  var rnd = Math.floor(Math.random() * newPasswordCharacters.length);
  newPassword.push(newPasswordCharacters[rnd]);
}

// Combined newPassword randomized array into one string
return newPassword.join("");

}