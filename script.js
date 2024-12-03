const menu = document.querySelector('#hamburger-menu');
const cancelMenu = document.querySelector('#close-menu')
const searchIcon = document.querySelector('#search');
const mobileDisplay = document.querySelector('.mobile_view')
const websiteTitle = document.querySelector('.web-title')
const mainContent = document.querySelector('.main');
const servicesContent = document.querySelector('.services');
const myServices = document.querySelector('.my_services');
const services = document.querySelector('.service');
const contactMe = document.querySelector('.contact_me');
const footerCOntent = document.querySelector('footer');
const copyTerms = document.querySelector('.copy_terms');
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
  myServices.style.display = 'none';
  services.style.display = 'none';

  mainContent.style.display = 'none';
  servicesContent.style.display = 'none';
  contactMe.style.display = 'none';
  footerCOntent.style.display = 'none';
  copyTerms.style.display = 'none';




} 
function hideNav(){
  websiteTitle.style.display = 'block';
  searchIcon.style.display = 'block';
  mobileDisplay.style.display = 'none';
  menu.style.display = 'block';
  myServices.style.display = 'flex';
  services.style.display = 'flex';

  cancelMenu.style.display = 'none'
  cancelMenu.style.color = '#939396';
  mainContent.style.display = 'flex';
  servicesContent.style.display = 'flex';
  contactMe.style.display = 'flex';
  footerCOntent.style.display = 'flex';
  copyTerms.style.display = 'flex';
}



// About Modal
const profilePhoto = document.querySelector('.right');
const modalPopUp = document.querySelector('.modal');

const aboutModal = document.getElementById('about-modal');
const closeBtn = document.querySelector('.close');

profilePhoto.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)


function showModal() {
  console.log('hello');
  modalPopUp.style.display = 'block'
}

function closeModal() {
  console.log('hiiiiiiii');
  modalPopUp.style.display = 'none'
}
// profilePhoto.addEventListener('click', () => aboutModal.style.display = 'flex');
// closeBtn.addEventListener('click', () => aboutModal.style.display = 'none');

// Confirmation Modal
const contactForm = document.getElementById('contact-form');
const confirmationModal = document.getElementById('confirmation-modal');
const confirmSubmit = document.getElementById('confirm-submit');
const cancelSubmit = document.getElementById('cancel-submit');

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   confirmationModal.style.display = 'flex';
// });

// confirmSubmit.addEventListener('click', () => {
//   confirmationModal.style.display = 'none';
//   contactForm.submit();
// });

// // cancelSubmit.addEventListener('click', () => confirmationModal.style.display = 'none');
