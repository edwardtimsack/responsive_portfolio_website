const menu = document.querySelector('#hamburger-menu');
const cancelMenu = document.querySelector('#close-menu')
const searchIcon = document.querySelector('#search');
const mobileDisplay = document.querySelector('.mobile_view')
// const hideElement = document.querySelectorAll('#hide');
const websiteTitle = document.querySelector('.web-title')
console.log(menu);

const elements = [
    document.querySelector('.web-title'),
    document.querySelector('.navigation')
]

menu.addEventListener('click', displayNav);
cancelMenu.addEventListener('click', hideNav);

function displayNav(){
  mobileDisplay.style.display = 'flex';
  // mobileDisplay.classList.add('mobile_view')
  websiteTitle.style.display = 'none';
  cancelMenu.style.display = 'block';
  cancelMenu.style.justifyContent = 'right';
  cancelMenu.style.display = 'right';
  searchIcon.style.display = 'none';
  menu.style.display = 'none';


} 
function hideNav(){
  websiteTitle.style.display = 'block';
  searchIcon.style.display = 'block';
  mobileDisplay.style.display = 'none';
  menu.style.display = 'block';
  cancelMenu.style.display = 'none'
  cancelMenu.style.color = '#939396';
}