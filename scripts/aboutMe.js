const appName = document.querySelector('#me');
const menu = document.querySelector('#ham');
const cancelMenu = document.querySelector('#close')
const searchIcon = document.querySelector('#searching');
const header = document.querySelector('header')
const main = document.querySelector('.main');
const more = document.querySelector('.more');
const lastestProjects = document.querySelector('.lastest_projects');
const skillsSet = document.querySelector('.skills_set');
const footer = document.querySelector('footer');
const copyTerms = document.querySelector('.copy_terms');
const mobile = document.querySelector('.mobile');
const desktopView = document.querySelector('.desktop_view');
const myProfile = document.querySelector('.my_profile');

const mobileView = document.querySelector('.mobile_view');

// console.log(menu);


menu.addEventListener('click', displayNav);
cancelMenu.addEventListener('click', hideNav);


function displayNav(){
    // menu.style.fontSize = '5rem';
    console.log('helloooooo')
    mobileView.style.display = 'flex';
    // desktopView.style.display = 'none';
    appName.style.display = 'none';
    searchIcon.style.display = 'none';
    cancelMenu.style.display = 'block';
    ham.style.display = 'none';
    desktopView.style.display = 'none';
    main.style.display = 'none';
    more.style.display = 'none';
    lastestProjects.style.display = 'none';
    skillsSet.style.display = 'none';
    footer.style.display = 'none';
    copyTerms.style.display = 'none';

}


function hideNav() {
    console.log('hiiiii')
    appName.style.display = 'block'
    searchIcon.style.display = 'block'
    cancelMenu.style.display = 'none';
    ham.style.display = 'block';
    main.style.display = 'flex';
    more.style.display = 'flex';
    more.style.flexDirection = 'column';
    lastestProjects.style.display = 'flex';
    skillsSet.style.display = 'flex';
    footer.style.display = 'flex';
    copyTerms.style.display = 'flex';
}