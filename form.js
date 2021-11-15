

var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var number = document.getElementById('number');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
e.preventDefault();

	
  checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	var usernameValue = username.value.trim();
	var emailValue = email.value.trim();
    var numberValue = number.value.trim();
	var passwordValue = password.value.trim();
	var password2Value = password2.value.trim();
    
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(numberValue === '') {
		setErrorFor(number, 'Phone Number cannot be blank');
	} else if (!isNumber(numberValue)) {
		setErrorFor(number, 'Not a valid Phone Number');
	} else {
		setSuccessFor(number);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	// } else if (!isPassword(passwordValue)){
    //     setErrorFor(password, 'Not a valid Password');
    } else{
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
    
}

var email1 = document.getElementById('email1');
var password1 = document.getElementById('password1');

form.addEventListener('submit', e =>{
// e.preventDefault();
	
 	checkInputs1();
});	 


function checkInputs1() {
   var email1Value = email1.value.trim();
   var password1Value = password1.value.trim();

   if(email1Value === '') {
	setErrorFor(email1, 'Email cannot be blank');
	form.addEventListener('submit', e =>{
	e.preventDefault();
    });
    }else if (!isEmail1(email1Value)) {
	setErrorFor(email1, 'Not a valid email');
	form.addEventListener('submit', e =>{
	e.preventDefault();
    });
	} else {
	setSuccessFor(email1);
	}
    if(password1Value === '') {
	setErrorFor(password1, 'Password cannot be blank');
	form.addEventListener('submit', e =>{
	e.preventDefault();
    });
	} else {
	setSuccessFor(password1);
	}
}


function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNumber(number){
    return  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number);
}

// function isPassword(password){

// var myInput = document.getElementById("password");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// // myInput.onfocus = function() {
// //   document.getElementById("message").style.display = "block";
// // }

// // // When the user clicks outside of the password field, hide the message box
// // myInput.onblur = function() {
// //    document.getElementById("message").style.display = "none";
// // }

// // // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
// //   // Validate lowercase letters
//    var lowerCaseLetters = /[a-z]/g;
//    if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//     } else {
//      letter.classList.remove("valid");
//      letter.classList.add("invalid");
//     }

// //   // Validate capital letters
//    var upperCaseLetters = /[A-Z]/g;
//    if(myInput.value.match(upperCaseLetters)) {
//      capital.classList.remove("invalid");
//       capital.classList.add("valid");
//     } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//     }

//    // Validate numbers
//   var numbers = /[0-9]/g;
//    if(myInput.value.match(numbers)) {
//      number.classList.remove("invalid");
//      number.classList.add("valid");
//     } else {
//      number.classList.remove("valid");
//      number.classList.add("invalid");
//     }

//    // Validate length
//   if(myInput.value.length >= 8) {
//      length.classList.remove("invalid"); 
//      length.classList.add("valid");
//     } else {
//      length.classList.remove("valid");
//      length.classList.add("invalid");
//     }
//  }
// }

function isEmail1(email1) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email1);
}

