const logregBox = document.querySelector(".logreg-box"),
  loginLink = document.querySelector(".login-link"),
  registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
    logregBox.classList.remove("active");
  });