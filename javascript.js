// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordUpper
var passwordLower
var passwordSymbol 
var passwordNumber
var passwordCharacters = ""
var passwordLength  
var passwordCreation
var password = ""
// Write password to the #password input

generateBtn.addEventListener("click", writePassword);

function writePassword(){
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// character string generation//
// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
  
//   console.log("getRandomLower:", getRandomLower);
// }

// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
// }

// function getRandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
// }

// function getRandomSymbol(){
//   var symbols= "!#$%&+=";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// generate function here//

function generatePassword(){

  //passwordLength= prompt("what is your desired password length? Must be at least 8, no more than 128");
  passwordLength = parseInt(prompt ("must be at least 8 characters no more than 128"))
  console.log("passwordLength:", passwordLength);
  // = confirm( " length is at least 8 and no more than 128");
  //console.log("passwordLength2:", passwordLength);
  passwordUpper= confirm("do you want upper case");
  passwordLower= confirm( "do you want lowercase");
  passwordSymbol = confirm("do you want special symbols");
  passwordNumber= confirm("do you want numbers");
  
  passwordCreation = "";
  //passwordLength = parseInt (passwordLength);
  console.log("passwordLength2:", passwordLength);
  console.log(typeof passwordLength)
  if (passwordLength < 8 || passwordLength > 128){
    console.log("we are imn here")
    alert (" please put valid imput");
    passwordLength = prompt(" length must be at least 8 and no more than 128");
  }

// character string generation//
// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
  
// }
// console.log("getRandomLower:", getRandomLower);

// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
// }

// function getRandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
// }

// function getRandomSymbol(){
//   var symbols= "!#$%&+=";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }
function getRandomCharacter(){
  var totalChoices= passwordCharacters.length
  var randomIndex= Math.floor(Math.random()* totalChoices)
  var randomChar= passwordCharacters[randomIndex]
  return randomChar

}

  if (passwordUpper) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   console.log(password)  
   };
  if (passwordLower){
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz"
    console.log(password)
  };
  if (passwordSymbol){
    passwordCharacters += "!#$%&+="
    console.log(passwordCharacters)
  };
   if (passwordNumber){
     passwordCharacters += "12345678910"
   console.log(password)
  };
  
  
  for (var i =0; i < passwordLength; i++){
    password += getRandomCharacter()
    
  }
    
  return password
    }


   // if (length <8 || length >128){
     // alert (" password does not meet length requirement");
     // length = prompt ("length requirement at least 8 no more than 128");
     // length = parseInt (length)
  

    
      

      


    

  
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 /// passwordText.value = password;


// Add event listener to generate button



//var passwordLength = "";
//var selectedUpper = "true";
//var selectedLower = "true";
//var selectedNumber = "true";
//var selectedSymbol = "true";

//passwordText = generatePassword(passwordLength,selectedUpper, selectedLower, selectedNumber, selectedSymbol);