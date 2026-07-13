const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {

    let valid = true;

    // Inputs
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const gender = document.getElementById("gender");

    // Error Labels
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const topicError = document.getElementById("topicError");
    const genderError = document.getElementById("genderError");

    // Clear previous errors
    const inputs = [username, email, password, confirmPassword];

    inputs.forEach(input => {
        input.classList.remove("error-border");
    });

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    topicError.textContent = "";
    genderError.textContent = "";

    // Function for empty validation
    function checkEmpty(input, errorElement){

        if(input.value.trim()===""){
            input.classList.add("error-border");
            errorElement.textContent="this field must not be empty";
            valid=false;
        }

    }

    checkEmpty(username,usernameError);
    checkEmpty(email,emailError);
    checkEmpty(password,passwordError);
    checkEmpty(confirmPassword,confirmPasswordError);

    // Password match
    if(
        confirmPassword.value.trim()!=="" &&
        password.value.trim()!=="" &&
        confirmPassword.value!==password.value
    ){

        confirmPassword.classList.add("error-border");
        confirmPasswordError.textContent="confirmed password mismatched the password";
        valid=false;

    }

    // Topic validation
    const topics=document.querySelectorAll(".topic");

    let checked=false;

    topics.forEach(topic=>{

        if(topic.checked){
            checked=true;
        }

    });

    if(!checked){
        topicError.textContent="At least one topic must be selected";
        valid=false;
    }

    // Gender validation
    if(gender.value==="--"){
        genderError.textContent="please choose your gender";
        valid=false;
    }

    // Success
    if(valid){
        alert("Form submitted successfully!");
    }

});