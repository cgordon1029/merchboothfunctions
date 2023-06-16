//TAKES IN SIGNUP INFORMATION

function ValidateEmail(email){ //ValidateEmail
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;//makes sure if it is a actual email address

		if (input.value.match(validRegex)) {
			alert("Valid email address!");
			document.form1.text1.focus();
			return true;
		} else {
			alert("Invalid email address!");
			document.form1.text1.focus();
			return false;
		}
	}

