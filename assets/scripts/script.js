const navToggler = document.getElementById('navToggler');
const nav = document.getElementById('nav-menu');
const header = document.querySelector('header');

function showNav() {
  nav.classList.add('show');
  // console.log('showing nav');
  navToggler.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#3bdfab"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"/></svg>';
}

function hideNav() {
  nav.classList.remove('show');
  // console.log('hiding nav');
  navToggler.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#3bdfab"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/></svg>';
}

navToggler.addEventListener('click', () => {
  nav.classList.contains('show') ? hideNav() : showNav();
});

/* window.addEventListener('click', (e) => {
  console.log('is this the button? ', navToggler.contains(e.target));
  console.log('is this the nav? ', nav.contains(e.target));
  console.log('is this the header? ', header.contains(e.target));

  // navToggler.contains(e.target) ||
  // (nav.classList.contains('show'))
  //   ? null
  //   : hideNav;

  header.contains(e.target) ? null : true;
}); */
