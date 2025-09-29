
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("hidden");
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("error-name");
  const emailError = document.getElementById("error-email");
  const messageError = document.getElementById("error-message");

  nameError.classList.add("hidden");
  emailError.classList.add("hidden");
  messageError.classList.add("hidden");

  if (!name) {
    nameError.textContent = "Name is required.";
    nameError.classList.remove("hidden");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Valid email is required.";
    emailError.classList.remove("hidden");
    valid = false;
  }

  if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    messageError.classList.remove("hidden");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully");
    this.reset();
  }
});


