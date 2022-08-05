function myValidation() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var passValidation = document.getElementById("passValidation").value;
    var message = document.getElementById("message");
    var error_message = "";
    console.log("You submitted the form.");
  
    var passwordCheck = false;
    var usernameCheck = false;
  
    // check if username not begins with [a-zA-Z]
    var alphnum = /^[a-z0-9]+$/;
    if (
      ("a" > username[0] || username[0] > "z") &&
      ("A" > username[0] || username[0] > "Z")
    ) {
      error_message += "Username must start with a-z or A-Z.<br>";
    }
    //check length and alphanumeric charaters of username
    else if (username.length < 3 || !alphnum.test(username)) {
      error_message +=
        "Username must include 3 or more Alphanumeric Characters.<br>";
    } else {
      usernameCheck = true;
    }
  
    //check passsword validation one by one
    var num = /[0-9]/;
    var upper = /[A-Z]/;
    var specialchar = /[/*-+!@#$^&*]/;
    // check password length
    if (password.length < 8) {
      error_message += "Password must be 8 or more characters.<br>";
    }
    // check at least one number
    else if (!num.test(password)) {
      error_message += "Password must contain at least one number.<br>";
    }
    // check at least one Uppercase letter
    else if (!upper.test(password)) {
      error_message += "Password must contain at least one Uppercase Letter.";
    }
    // check at least one special char
    else if (!specialchar.test(password)) {
      error_message +=
        "Password must contain one special character.(/*-+!@#$^&*).<br>";
    }
    // check both password fields are equal or not
    else if (password !== passValidation) {
      error_message += "Both Passwords must be the same!";
    } else {
      passwordCheck = true;
    }
  
    if (passwordCheck && usernameCheck) {
      // successful form submission
      document.getElementById("myForm").submit();
    } else {
      //show error message
      message.innerHTML = error_message;
      message.style.color = "red";
    }
  }