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

  if (!lowerCase && !upperCase && !number && !special){
    alert("Error: You must choose atleast one parameter");
    return "No parameters selected.";
  }

/*
  for (var i = 0; i < passwordObject.passwordLength; i++){
    var rnd = Math.floor(Math.random() * passwordObject.lowerCase.length);
    newPassword.push(passwordObject.lowerCase[rnd]);

    var rnd = Math.floor(Math.random() * passwordObject.upperCase.length);
    newPassword.push(passwordObject.upperCase[rnd]);

    var rnd = Math.floor(Math.random() * passwordObject.number.length);
    newPassword.push(passwordObject.number[rnd]);

    var rnd = Math.floor(Math.random() * passwordObject.special.length);
    newPassword.push(passwordObject.special[rnd]);
  }
  console.log(Object.keys(passwordObject)[0]);
  return newPassword;
  */

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

console.log(newPasswordCharacters);

for (var i = 0; i < passwordObject.passwordLength; i++){
  var rnd = Math.floor(Math.random() * newPasswordCharacters.length);
  console.log(passwordObject.passwordLength);
  newPassword.push(newPasswordCharacters[rnd]);
}

return newPassword.join("");
// END FUNCTION
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