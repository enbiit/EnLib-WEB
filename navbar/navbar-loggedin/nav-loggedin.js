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

const logoutBtn = document.getElementById('logout-btn');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
const popup = document.createElement('div');