const loginScreen = document.getElementById('loginScreen');
document.getElementById('logoutBtn').addEventListener('click', (e) => {
  e.preventDefault();
  loginScreen.classList.add('show');
  closeSidebar();
});
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  loginScreen.classList.remove('show');
  goToPage('dashboard');
  showToast(`Welcome back, ${currentStudentName}!`);
  document.getElementById('loginForm').reset();
});