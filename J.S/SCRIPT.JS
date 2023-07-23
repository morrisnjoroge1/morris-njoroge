function generatePassword() {
  //get the length of the password
  var length = document.getElementById("length").value;

  //setting of possible characters
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+-=[]{}\\|;:'\",<.>/?~`";

  //pool of characters to use as password
  var pool = "";
  if (document.getElementById("uppercase").checked) {
    pool += uppercase;
  }
  if (document.getElementById("lowercase").checked) {
    pool += lowercase;
  }
  if (document.getElementById("numbers").checked) {
    pool += numbers;
  }
  if (document.getElementById("symbols").checked) {
    pool += symbols;
  }

  //ensure one of checkbox is selected
  if (pool.length == 0) {
    alert("Please select at least one character type");
    return;
  }
  //if password length is valid
  if (length < 8 || length > 64) {
    alert("Password length must be between 8 and 64");
    return;
  }

  //generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    password += pool.charAt(Math.floor(Math.random() * pool.length));
  }

  // to display password
  document.getElementById("password").innerHTML = password;
}

//event listener to the "generate password" button
var generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generatePassword);
