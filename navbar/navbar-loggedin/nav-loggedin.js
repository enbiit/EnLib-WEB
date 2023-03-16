const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
const closeSearch = document.querySelector('.close-search');
const logo = document.querySelector('.logo');
const checkBtn = document.querySelector('.checkbtn');
const loggedinItems = document.querySelector('.loggedin-items');
searchIcon.addEventListener('click', function() {
  searchIcon.style.display = 'none';
  searchBox.style.display = 'block';
  closeSearch.style.display = 'block';
  logo.style.display = 'none';
  checkBtn.style.display = 'none';
  loggedinItems.style.display='none';
});
closeSearch.addEventListener('click', function() {
  searchIcon.style.display = 'block';
  searchBox.style.display = 'none';
  closeSearch.style.display = 'none';
  logo.style.display = 'block';
  checkBtn.style.display = 'block';
  loggedinItems.style.display='';
});

const logoutButton = document.querySelector('#logout-btn');
const logoutDialog = document.querySelector('#logout-dialog');
logoutButton.addEventListener('click', () => {
  logoutDialog.style.display = 'block';
});

const cancelButton = document.querySelector('#cancel-button');

cancelButton.addEventListener('click', () => {
  logoutDialog.style.display = 'none';
});

const confirmButton= document.querySelector('#confirm-button');

confirmButton.addEventListener('click', () => {
  window.location.href = '../nav-signin.html';
});

