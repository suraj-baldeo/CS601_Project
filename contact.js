const f = document.forms.myForm;
const btnSubmitList = document.getElementById('submit-btn');
btnSubmitList.addEventListener('click', validateForm);

function validateForm(e) {    
    // Prevent form from submitting to server
    e.preventDefault();

    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');

    firstNameField.style.backgroundColor = "white";
    lastNameField.style.backgroundColor = "white";
    emailField.style.backgroundColor = "white";
    phoneField.style.backgroundColor = "white";
    
    const firstName = f.firstName.value;
    const lastName = f.lastName.value;
    const email = f.email.value;
    const phone = f.phone.value;
    const message = f.message.value;
  
    const errors = document.getElementById("errors");

    // Reset error messages
    const errorsContent = errors.querySelectorAll("p");
    
    errorsContent.forEach(e => e.remove());

    // Validating name using regex
    function isName(item) {
      let count = 0;
  
      for(let c of item) {
          
          if(/^[a-z]$/i.test(c)) { count += 1; }
  
          if(count > 1) { return true; }
      }
      return false;
    }
  
    // Validating email format
    function isEmail(item) {
      return /^[a-z0-9._+\-%!*]+@[a-z0-9.\-]+\.[a-z0-9]+$/i.test(item);
    }

    // Validating email format
    function isPhone(item) {
        return /^\d{3}[-\s]\d{3}[-\s]?\d{4}$/i.test(item);
    }
  
    let isValid = true;
  
    // Validate first name
    if (!isName(firstName)) {
      errors.innerHTML += "<p>First name must have at least 2 alpha characters.</p>";
      firstNameField.style.backgroundColor = "orange";
      isValid = false;
    }
  
    // Validate last name
    if (!isName(lastName)) {
      errors.innerHTML += "<p>Last name must have at least 2 alpha characters.</p>";
      lastNameField.style.backgroundColor = "orange";
      isValid = false;
    }
  
    // Validate email
    if (!isEmail(email)) {
      errors.innerHTML += "<p>Email must follow a valid email format.</p>";
      emailField.style.backgroundColor = "orange";
      isValid = false;
    }

    // Validate phone number
    if (!isPhone(phone)) {
        errors.innerHTML += "<p>Phone number must follow a valid format.</p>";
        phoneField.style.backgroundColor = "orange";
        isValid = false;
    }
  
    if (isValid) {
        // Hide the form and display success message
        document.getElementById('myForm').style.display = 'none';
        const successMessage = document.getElementById('success-message');
        successMessage.innerHTML = "<p>Message was successfully sent to Suraj Baldeo!</p>";
        successMessage.style.paddingBottom = "400px"
    }
  
  }

 