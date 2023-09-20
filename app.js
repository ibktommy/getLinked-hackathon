// NAVMENU DISPLAY
const navMenuBar = document.querySelector('.nav-center-menu-bar');
const navMenuBarLines = document.querySelector('.line')
const mobileNavlinks = document.querySelector('.mobile-navlinks');

navMenuBar.addEventListener('click', () => {
  navMenuBar.classList.toggle('change')
  mobileNavlinks.classList.toggle('change')
})