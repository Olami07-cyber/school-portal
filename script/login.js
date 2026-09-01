
const studentBtn = document.getElementById("studentBtn");
const adminBtn = document.getElementById("adminBtn");

const matricGroup = document.getElementById("matricGroup");
const emailGroup = document.getElementById("emailGroup");
const nameGroup = document.getElementById("nameGroup");
const confirmGroup = document.getElementById("confirmGroup");

const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");

const submitBtn = document.getElementById("submitBtn");

const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");

const forgotPassword = document.getElementById("forgotPassword");

const showPassword = document.getElementById("showPassword");
const password = document.getElementById("password");

showPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "Hide";
    } else {
        password.type = "password";
        showPassword.textContent = "Show";
    }
});

const authForm = document.getElementById("authForm");
const message = document.getElementById("message");

let userType = "student";
let isSignup = false;




/* =========================
   USER TYPE
========================= */

studentBtn.addEventListener("click", () => {

    userType = "student";

    studentBtn.classList.add("active");
    adminBtn.classList.remove("active");

    updateForm();
});


adminBtn.addEventListener("click", () => {

    userType = "admin";

    adminBtn.classList.add("active");
    studentBtn.classList.remove("active");

    updateForm();
});


/* =========================
   LOGIN / SIGNUP SWITCH
========================= */

switchBtn.addEventListener("click", () => {

    isSignup = !isSignup;

    updateForm();

});


/* =========================
   UPDATE FORM
========================= */

function updateForm() {

    message.textContent = "";

    if (isSignup) {

        formTitle.textContent = "Create account";

        formSubtitle.textContent =
            userType === "student"
                ? "Create your student portal account to continue."
                : "Create an administrator account to continue.";

        submitBtn.textContent = "Create account";

        switchText.textContent =
            "Already have an account?";

        switchBtn.textContent =
            "Sign in";

        nameGroup.classList.remove("hidden");
        confirmGroup.classList.remove("hidden");

        forgotPassword.classList.add("hidden");

    } else {

        formTitle.textContent = "Sign back in";

        formSubtitle.textContent =
            userType === "student"
                ? "Enter your matric number and password to continue."
                : "Enter your email and password to continue.";

        submitBtn.textContent = "Sign in";

        switchText.textContent =
            "Don't have an account?";

        switchBtn.textContent =
            "Create account";

        nameGroup.classList.add("hidden");
        confirmGroup.classList.add("hidden");

        forgotPassword.classList.remove("hidden");
    }


    if (userType === "student") {

        matricGroup.classList.remove("hidden");
        emailGroup.classList.add("hidden");

    } else {

        matricGroup.classList.add("hidden");
        emailGroup.classList.remove("hidden");

    }
}


/* =========================
   SHOW PASSWORD
========================= */

showPassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        showPassword.textContent = "Hide";

    } else {

        password.type = "password";

        showPassword.textContent = "Show";
    }

});


/* =========================
   FORM SUBMISSION
========================= */

authForm.addEventListener("submit", (event) => {

    event.preventDefault();

    message.textContent = "";


    const passwordValue = password.value;


    /* LOGIN */

    if (!isSignup) {

        if (userType === "student") {

            const matric =
                document.getElementById("matric").value.trim();

            if (!matric || !passwordValue) {

                showError(
                    "Please enter your matric number and password."
                );

                return;
            }

        } else {

            const email =
                document.getElementById("email").value.trim();

            if (!email || !passwordValue) {

                showError(
                    "Please enter your email and password."
                );

                return;
            }

        }


        showSuccess("Login successful!");

        // Connect your backend authentication here.
        return;
    }


    /* SIGNUP */

    const name =
        document.getElementById("name").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (!name) {

        showError("Please enter your full name.");

        return;
    }


    if (userType === "student") {

        const matric =
            document.getElementById("matric").value.trim();

        if (!matric) {

            showError("Please enter your matric number.");

            return;
        }

    } else {

        const email =
            document.getElementById("email").value.trim();

        if (!email) {

            showError("Please enter your email address.");

            return;
        }
    }


    if (!passwordValue) {

        showError("Please enter a password.");

        return;
    }


    if (passwordValue.length < 6) {

        showError(
            "Password must contain at least 6 characters."
        );

        return;
    }


    if (passwordValue !== confirmPassword) {

        showError("Passwords do not match.");

        return;
    }


    showSuccess("Account created successfully!");

    // Connect your backend signup logic here.
});


/* =========================
   MESSAGES
========================= */

function showError(text) {

    message.style.color = "#dc2626";

    message.textContent = text;
}


function showSuccess(text) {

    message.style.color = "#16a34a";

    message.textContent = text;
}

// Function to switch between setting tabs
function openTab(event, tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach((content) => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach((btn) => btn.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Example form submit handling (Saves preferences locally)
document.getElementById('accountForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Account settings updated successfully!');
});

document.getElementById('examForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Exam preferences saved!');
});


// ================================
// OPEN PROFILE
// ================================

function showProfile() {

    // Hide other dashboard sections
    document.querySelectorAll(".dashboard-section").forEach(section => {
        section.style.display = "none";
    });

    // Show profile
    const profile = document.getElementById("profileSection");

    if (profile) {
        profile.style.display = "block";
    }

    // Remove active from menu
    document.querySelectorAll(".menu").forEach(menu => {
        menu.classList.remove("active");
    });

    // Add active to Profile
    const profileMenu = document.getElementById("profileMenu");

    if (profileMenu) {
        profileMenu.classList.add("active");
    }
}


// ================================
// EDIT PROFILE
// ================================

function editProfile() {

    document.getElementById("editName").value =
        document.getElementById("fullName").textContent;

    document.getElementById("editEmail").value =
        document.getElementById("email").textContent;

    document.getElementById("editPhone").value =
        document.getElementById("phone").textContent;

    document.getElementById("editDepartment").value =
        document.getElementById("department").textContent;

    document.getElementById("profileModal").style.display = "flex";
}


// ================================
// CLOSE MODAL
// ================================

function closeProfileModal() {

    document.getElementById("profileModal").style.display = "none";
}


// ================================
// SAVE PROFILE
// ================================

function saveProfile() {

    const name =
        document.getElementById("editName").value;

    const email =
        document.getElementById("editEmail").value;

    const phone =
        document.getElementById("editPhone").value;

    const department =
        document.getElementById("editDepartment").value;


    // Update profile information
    document.getElementById("fullName").textContent = name;

    document.getElementById("displayName").textContent = name;

    document.getElementById("email").textContent = email;

    document.getElementById("phone").textContent = phone;

    document.getElementById("department").textContent = department;


    // Close modal
    closeProfileModal();

    alert("Profile updated successfully!");
}


// ================================
// CHANGE PROFILE PICTURE
// ================================

function changeProfilePicture(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        document.getElementById("profileImage").src =
            e.target.result;

    };

    reader.readAsDataURL(file);
}


// ================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ================================

window.onclick = function(event) {

    const modal =
        document.getElementById("profileModal");

    if (event.target === modal) {
        closeProfileModal();
    }

};
