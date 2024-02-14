document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (fname === "" || lname === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    // If all checks pass, submit the form
    alert("Form submitted successfully!");
    this.submit();
  });
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }