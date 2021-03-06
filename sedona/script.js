var navToggle = document.querySelector('.nav-control-toggle'),
    nav = document.querySelector('.main-nav');

nav.classList.remove('main-nav--opened');
nav.classList.add('main-nav--closed');

navToggle.addEventListener("click", function() {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  } else if (nav.classList.contains('main-nav--opened')) {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  }
});
