function validation() {
    // Username 
    var user = document.getElementById('user').value;
    var regu = /^[a-zA-Z ]{2,30}$/;

    // Email
    var email = document.getElementById('email').value;
    var rege = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Mobile Number
    var mobile = document.getElementById('mobile').value;
    var regm = /^[1-9]\d{9}$/;

    // Password
    var pass = document.getElementById('pass').value;
    var regp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; /*Minimum eight characters, at least one letter, one number and one special character:*/

    // Confirm Password
    var cpass = document.getElementById('cpass').value;

    // Gender (Radio button)
    const gender = document.querySelectorAll('input[name="gender"]');

    // Date of Birth
    var date = document.getElementById("date");

    // Checkbox
    const Hobbies = document.querySelectorAll('input[name="Hobbies"]');



    // For Name 
    if (!regu.test(user)) {
        document.getElementById("usernameerr").style.display = "block";
        document.getElementById("usernameerr").innerHTML = " *Please Enter the Valid name "
    } else {
        document.getElementById("usernameerr").style.display = "none";
    }

    // For Email
    if (!rege.test(email)) {
        document.getElementById("emailerr").style.display = "block";
        document.getElementById("emailerr").innerHTML = " *Please Enter the Valid Email "
    } else {
        document.getElementById("emailerr").style.display = "none";
    }

    // For Mobile Number
    if (!regm.test(mobile)) {
        document.getElementById("numbererr").style.display = "block";
        document.getElementById("numbererr").innerHTML = " *Please Enter the Valid Mobile Number "
    } else {
        document.getElementById("numbererr").style.display = "none";
    }


    // For Gender
    let selectedGender;
    for (const genderBtn of gender) {
        if (genderBtn.checked) {
            selectedGender = genderBtn.value;
            break;
        }
    }
    if (selectedGender) {
        document.getElementById("gendererr").style.display = "none";
    } else {
        document.getElementById("gendererr").style.display = "block";
        document.getElementById('gendererr').innerHTML = " *Please select any-one"
    }

    // For Date
    if (!date.value) {
        document.getElementById("dateerr").style.display = "block";
        document.getElementById('dateerr').innerHTML = " *Please select any date"
    }
    else {
        document.getElementById("dateerr").style.display = "none";

    }

    // For checkbox
    let selectedHobbies;
    for (const HobbiesBtn of Hobbies) {
        if (HobbiesBtn.checked) {
            selectedHobbies = HobbiesBtn.value;
            break;
        }
    }
    if (selectedHobbies) {
        document.getElementById("checkboxerr").style.display = "none";
    } else {
        document.getElementById("checkboxerr").style.display = "block";
        document.getElementById('checkboxerr').innerHTML = " *Please select any-one"
    }


    // For Password
    if (!regp.test(pass)) {
        document.getElementById("passworderr").style.display = "block";
        document.getElementById('passworderr').innerHTML = " *Please Enter the Valid Password";
    } else {
        document.getElementById("passworderr").style.display = "none";
    }


    // For Confirm Password
    if (cpass != pass) {
        document.getElementById("cpassworderr").style.display = "block";
        document.getElementById('cpassworderr').innerHTML = " *Please Enter the Same Password as you entered before";
    } else {
        document.getElementById("cpassworderr").style.display = "none";
    }

    if (!regu.test(user) || !rege.test(email) || !regm.test(mobile) || !regp.test(pass) || cpass != pass || !gender || !date.value || !Hobbies) {
        return false;
    }
    return true;
}