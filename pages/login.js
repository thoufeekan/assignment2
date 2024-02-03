function validate() {
    
    const validPhoneRegex = /^\d{10}$/; 
    const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;
   
    
  
    if (validPhoneRegex.test(form2Example10.value)) {
            err8.innerText = "Phone number is valid";
            err8.style.color = 'green';
        } else {
            err8.innerText = "Phone number is not valid";
            err8.style.color = 'red';
            isValid = false;
        }
  
        if (validEmailRegex.test(form2Example17.value)) {
            err9.innerText ="email is valid";
            err9.style.color ='green';
        }else{
          err9.innerText = "email is not valid";
            err9.style.color = 'red';
            isValid = false;
      
        }
        if (validPassRegex.test(form2Example27.value)) {
            err0.innerText = "password valid";
            err0.style.color = 'green';
    
}
else{
    err0.innerText = "password invalid or weak ";
      err0.style.color = 'red';
      isValid = false
}
}