document.getElementById("contactForm").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
      event.preventDefault(); // stop form from submitting
      return;
    }

    // Optional: email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    alert("Message sent successfully! ✅");
  });
