const studentBtn = document.getElementById("studentBtn");
const adminBtn = document.getElementById("adminBtn");
const matricGroup = document.getElementById("matricGroup");
const emailGroup = document.getElementById("emailGroup");
const showPassword = document.getElementById("showPassword");
const password = document.getElementById("password");
const authForm = document.getElementById("authForm");
const message = document.getElementById("message");

let userType = "student";

function setUserType(type) {
  userType = type;
  studentBtn.classList.toggle("active", type === "student");
  adminBtn.classList.toggle("active", type === "admin");
  matricGroup.classList.toggle("hidden", type !== "student");
  emailGroup.classList.toggle("hidden", type !== "admin");
}

studentBtn.addEventListener("click", () => setUserType("student"));
adminBtn.addEventListener("click", () => setUserType("admin"));

showPassword.addEventListener("click", () => {
  const isHidden = password.type === "password";
  password.type = isHidden ? "text" : "password";
  showPassword.textContent = isHidden ? "Hide" : "Show";
});

document.getElementById("switchBtn").addEventListener("click", () => { window.location.href = "./signup.html"; });

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const identifier = document.getElementById(userType === "student" ? "matric" : "email").value.trim();
  if (!identifier || !password.value) {
    message.style.color = "#b42318";
    message.textContent = "Enter your credentials to continue.";
    return;
  }
  message.style.color = "#16803c";
  message.textContent = "Login successful.";
});
