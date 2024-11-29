const menu = document.querySelector('#hamburger-menu');
const cancelMenu = document.querySelector('#close-menu')
const searchIcon = document.querySelector('#search');
const header = document.querySelector('header')
const main = document.querySelector('.main');
const mobileDisplay = document.querySelector('.mobile_view');
const servicesContent = document.querySelector('.getInTouch');
const contactMe = document.querySelector('.contact_us');
const footer = document.querySelector('footer');
const copyTerms = document.querySelector('.copy_terms');
const mobile = document.querySelector('.mobile');
console.log(menu)
// menu.addEventListener('click', displayNav);
// cancelMenu.addEventListener('click', hideNav);

// code block 
    const searching = document.querySelector('#searching');
    const hideMenu = document.querySelector('#close');
    const ham = document.querySelector('#ham');
    const webName = document.querySelector('#me');
    const mobileView = document.querySelector('.mobile_view');
    
    hideMenu.addEventListener('click', hide);
    ham.addEventListener('click', display);

    function display() {
        ham.style.display = 'none';
        searchIcon.style.display = 'none'
        hideMenu.style.display = 'block';
        mobileView.style.display = 'flex';
        // searching.style.fontSize = '10rem'
        webName.style.display = 'none';
        main.style.display = 'none';
        searching.style.display = 'none';
        header.style.display = 'none'
        servicesContent.style.display = 'none'
        contactMe.style.display = 'none'
        footer.style.display = 'none';
        copyTerms.style.display = 'none';

        // h.style.display = 'none'
        


    }

    function hide() {
        ham.style.display = 'block';
        hideMenu.style.display = 'none';
        mobileView.style.display = 'none';
        main.style.display = 'flex';

        webName.style.display = 'block';
        searching.style.display = 'flex';
        servicesContent.style.display = 'flex'
        contactMe.style.display = 'flex'
        footer.style.display = 'flex';
        copyTerms.style.display = 'flex';
        

        // hideMenu.style.display = 'block'
        // searching.style.fontSize = '10rem'


    }
// code block


// function displayNav() {
//     cancelMenu.style.display = 'block'
//     menu.style.display = 'none';
//     main.style.display = 'none';
//     mobileDisplay.style.display = 'none';
//     servicesContent.style.display = 'none';
//     contactMe.style.display = 'none';
//     footer.style.display = 'none';

// }
// function hideNav() {
//     // header.style.display = 'none'                     
//     menu.style.display  = 'block';
//     footer.style.display = 'none';
//     searchIcon.style.display = ' block'
//     mobileDisplay.style.display = 'flex'; 
//     cancelMenu.style.display = 'none';
//     mainContent.style.display = 'flex';
//     servicesContent.style.display = 'flex';
//     contactMe.style.display = 'flex';
//     footer.style.display = 'flex';
//     copyTerms.style.display = 'flex';
// }