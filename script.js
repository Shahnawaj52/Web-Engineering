document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const batchSec = document.getElementById('batchSec').value.trim();
    const hobbies = document.getElementById('hobbies').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
  
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+(\.[a-z]+)?@diu\.edu\.bd$/;
    if (!emailPattern.test(email)) {
      message.textContent = "Invalid email format!";
      return;
    }
  
    // Batch & Section validation: 61_J
    const batchSecPattern = /^\d{2}_[A-Z]$/;
    if (!batchSecPattern.test(batchSec)) {
      message.textContent = "Batch & Section must be like 61_J";
      return;
    }
  
    // Hobbies validation
    const hobbyList = hobbies.split(',').map(h => h.trim().toLowerCase());
    if (hobbyList.length < 5 || !hobbyList.includes('painting')) {
      message.textContent = "Must include at least 5 hobbies and 'painting'";
      return;
    }
  
    // Password validation
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasHash = /[#]/.test(password);
    const andChar =/&/.test(password);
    if (!(hasUpper && hasLower && hasHash)) {
      message.textContent = "Password must include uppercase, lowercase, and #";
      return;
    }
  
    // Confirm password
    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      return;
    }
  
    message.style.color = "green";
    message.textContent = "Registration Successful!";
  });
  