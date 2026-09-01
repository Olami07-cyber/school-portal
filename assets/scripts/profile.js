function editProfile() {
  document.getElementById("editName").value = document.getElementById("fullName").textContent;
  document.getElementById("editEmail").value = document.getElementById("email").textContent;
  document.getElementById("editPhone").value = document.getElementById("phone").textContent;
  document.getElementById("editDepartment").value = document.getElementById("department").textContent;
  document.getElementById("profileModal").style.display = "flex";
}

function closeProfileModal() { document.getElementById("profileModal").style.display = "none"; }

function saveProfile() {
  const fields = [["fullName", "editName"], ["email", "editEmail"], ["phone", "editPhone"], ["department", "editDepartment"]];
  fields.forEach(([displayId, inputId]) => { document.getElementById(displayId).textContent = document.getElementById(inputId).value; });
  document.getElementById("displayName").textContent = document.getElementById("editName").value;
  closeProfileModal();
}

function changeProfilePicture(event) {
  const file = event.target.files[0];
  if (file) document.getElementById("profileImage").src = URL.createObjectURL(file);
}

window.addEventListener("click", (event) => { if (event.target === document.getElementById("profileModal")) closeProfileModal(); });
