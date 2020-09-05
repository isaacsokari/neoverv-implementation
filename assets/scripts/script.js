const navToggler = document.getElementById('navToggler');
const nav = document.getElementById('nav-menu');
const header = document.querySelector('header');

function showNav() {
  nav.classList.add('show');
  // console.log('showing nav');
  navToggler.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#3bdfab"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
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
