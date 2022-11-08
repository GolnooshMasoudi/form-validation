document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  if (!verifyPassword()) {
    event.preventDefault();
  } else {
    console.log("password correct");
  }

  if (!validateFname()) {
    event.preventDefault();
  } else {
    console.log("First name is strong");
  }

  if (!validateLname()) {
    event.preventDefault();
  } else {
    console.log("Last name is strong");
  }

  if (!verifyPhone()) {
    event.preventDefault();
  } else {
    console.log("Phone number is correct");
  }
  if (!verifyGender()) {
    event.preventDefault();
  } else {
    console.log("Gender selection is done");
  }
  if (!isAtleastCheckInputChecked()) {
    event.preventDefault();
  } else {
    console.log("true");
  }
  if (!validateForm()) {
    event.preventDefault();
  } else {
    console.log("true");
  }
  if (!verifyRole()) {
    event.preventDefault();
  } else {
    console.log("done");
  }
});

function verifyPassword() {
  let pw = document.getElementById("password").value;
  if (pw == "") {
    document.getElementById("message").innerHTML =
      "**Fill the password please!";
    return false;
  }
  if (pw.length < 10) {
    document.getElementById("message").innerHTML =
      "**Password length must be atleast 10 characters";
    return false;
  }
  if (pw.length > 13) {
    document.getElementById("message").innerHTML =
      "**Password length must not exceed 13 characters";
    return false;
  } else {
    // alert("Password is correct");
    return true;
  }
}
function validateFname() {
  let fName = document.getElementById("firstname").value;
  let regexFname = /[A-Za-z]g/;
  if (fName == "") {
    // alert("First name can't be blank");
    document.getElementById("error-firstname").innerHTML =
      "**First name can't be blank";
    return false;
  } else if (!regexFname.test(fName)) {
    document.getElementById("error-firstname").innerHTML =
      "**First name is not valid";
    return false;
  } else if (fName.length > 20) {
    // alert("First name can't be more than 20 characters long.");
    document.getElementById("error-firstname").innerHTML =
      "**First name can't be more than 20 characters long.";
    return false;
  } else {
    return true;
  }
}
function validateLname() {
  let lName = document.getElementById("lastname").value;

  if (lName == null) {
    // alert("Last name can't be blank");
    document.getElementById("error-lastname").innerHTML =
      "**Last name can't be blank";
    return false;
  } else if (lName.length > 20) {
    // alert("Last name can't be more than 20 characters long.");
    document.getElementById("error-lastname").innerHTML =
      "**Last name can't be more than 20 characters long.";
    return false;
  }
}

function validateemail() {
  let email = document.getElementById("email").value;
  let atposition = email.indexOf("@");
  let dotposition = email.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert(
      "Please enter a valid e-mail address \n atpostion:" +
        atposition +
        "\n dotposition:" +
        dotposition
    );
    return false;
  }
}

function verifyPhone() {
  let phoneNumber = document.getElementById("phone").value;
  let regexPhone = /^([+]46)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/;

  if (isNaN(phoneNumber) || phoneNumber == "") {
    document.getElementById("error-phone").innerHTML =
      "**Fill the phone please!";
    return false;
  } else if (!regexPhone.test(phoneNumber)) {
    document.getElementById("error-phone").innerHTML = "**phone is not valid";
    return false;
  } else {
    return true;
  }
}

function verifyGender() {
  let genderChecked = document.querySelector("input[type='radio']:checked");
  if (!genderChecked) {
    document.getElementById("error-gender").innerHTML =
      "**Select one of the gender!";
    return false;
  } else {
    return true;
  }
}

// let checkBoxes = document.querySelectorAll("input[type='checkbox']:checked");

// checkBoxes.forEach(function (item, index) {

//   item.addEventListener("click", function (checkbox) {
//     // let values =[];

//     if (!checkBoxes.length > 0){
//       document.getElementById("error-skill").innerHTML = "**You should at least select one skill"
//     } else {
//       // values.push(checkbox.value);
//       return true;
//     }
//   }
//   function valthis() {
//     var checkBoxes = document.getElementsByClassName('myCheckBox');
//     var isChecked = false;
//     for (var i = 0; i < checkBoxes.length; i++) {
//         if (checkBoxes[i].checked) {
//             isChecked = true;
//         };
//     };
//     if (isChecked) {
//         alert('At least one checkbox checked!');
//     } else {
//         alert('Please, check at least one checkbox!');
//     }
//}

function isAtleastCheckInputChecked(selector) {
  let checkBoxes = document.querySelectorAll("input[type='checkbox']:checked");

  if (checkBoxes == undefined) {
    return false;
  }

  var isChecked = false;

  checkBoxes.forEach(function (currentValue, currentIndex, listObj) {
    if (currentValue.checked) {
      isChecked = true;
    }
  });

  return isChecked;
}

function validateForm(e) {
  validationStatus = isAtleastCheckInputChecked(
    "input[type='checkbox']:checked"
  );

  if (!validationStatus) {
    //looks good, can proceed for further procesing form data.
    document.getElementById("error-skill").innerHTML = "**valid form";
  } else {
    //form is not valid
    document.getElementById("error-skill").innerHTML =
      "**You should at least select one skill";
  }
}

function verifyRole() {
  let select = document.getElementById("role");

  if (select.tagName === "SELECT") {
    return false;
  } else {
    return true;
  }
}
