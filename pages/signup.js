




function validate() {
  const validNameRegex = /^[a-zA-Z\s]+$/;
  const validPhoneRegex = /^\d{10}$/; 
  const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validPassRegex = /^[a-zA-Z0-9]+$/;
  const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; 
  


  let isValid = true;

  if (validNameRegex.test(form3Example1c.value)) {
      err1.innerText = "Name is valid";
      err1.style.color = 'green';
  } else {
      err1.innerText = "Name is not valid";
      err1.style.color = 'red';
      isValid = false;
  }

  if (validPhoneRegex.test(mobile.value)) {
      err2.innerText = "Phone number is valid";
      err2.style.color = 'green';
  } else {
      err2.innerText = "Phone number is not valid";
      err2.style.color = 'red';
      isValid = false;
  }
  if (validEmailRegex.test(form3Example3c.value)) {
      err7.innerText ="email is valid";
      err7.style.color ='green';
  }else{
    err7.innerText = "email is not valid";
      err7.style.color = 'red';
      isValid = false;

  }




  if (validPassRegex.test(form3Example4c.value)) {
      err3.innerText = "Password is valid";
      err3.style.color = 'green';

      // Check for password strength
      if (strongPassRegex.test(form3Example4c.value)) {
          err4.innerText = "Password is strong";
          err4.style.color = 'green';
      } else {
          err4.innerText = "Password is weak; consider a stronger one";
          err4.style.color = 'orange';
      }
  } else {
      err3.innerText = "Password is not valid";
      err3.style.color = 'red';
      isValid = false;
  }

  // Confirm password check
  if (form3Example4c.value !== form3Example4cd.value) {
      err5.innerText = "Passwords do not match";
      err5.style.color = 'red';
      isValid = false;
  } else {
      err5.innerText = "";
  }

  
  if (!isValid) {
      event.preventDefault(); 
  }
}



