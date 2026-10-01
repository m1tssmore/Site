const contactForm = document.getElementById("contactForm");
const contactFormMessage = document.getElementById("contactFormMessage");

function showError(input, message) {
  input.classList.add("invalid");

  const group = input.closest(".form-group");
  const error = group.querySelector(".error");

  error.textContent = message;
}

function clearError(input) {
  input.classList.remove("invalid");

  const group = input.closest(".form-group");
  const error = group.querySelector(".error");

  error.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("contactEmail");
  const message = document.getElementById("message");

  let isValid = true;

  contactFormMessage.textContent = "";
  contactFormMessage.className = "form-message";

  [name, email, message].forEach(clearError);

  if (name.value.trim().length < 2) {
    showError(name, "Аты-жөніңізді енгізіңіз.");
    isValid = false;
  }

  if (!isValidEmail(email.value.trim())) {
    showError(email, "Дұрыс электрондық пошта енгізіңіз.");
    isValid = false;
  }

  if (message.value.trim().length < 5) {
    showError(message, "Хабарламаңызды толығырақ жазыңыз.");
    isValid = false;
  }

  if (isValid) {
    contactFormMessage.textContent =
      "Хабарламаңыз жіберілді! Жақын арада сізбен байланысамыз.";
    contactFormMessage.classList.add("success");
    contactForm.reset();
  }
});

document.querySelectorAll(".contact-form input, .contact-form textarea").forEach(function (input) {
  input.addEventListener("input", function () {
    clearError(input);
    contactFormMessage.textContent = "";
  });
});
