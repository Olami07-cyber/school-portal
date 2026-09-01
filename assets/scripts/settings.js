function openTab(event, tabName) {
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.toggle("active", content.id === tabName));
  document.querySelectorAll(".tab-btn").forEach((button) => button.classList.toggle("active", button === event.currentTarget));
}

document.querySelectorAll(".settings-form").forEach((form) => form.addEventListener("submit", (event) => event.preventDefault()));
