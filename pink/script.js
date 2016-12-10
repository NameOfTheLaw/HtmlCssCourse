var navToggle = document.getElementById('nav-control-toggle'),
    nav = document.getElementById('main-nav');

nav.className = 'main-nav main-nav--closed';
navToggle.addEventListener("click", function() {
  if (nav.className.indexOf('--closed') != -1) {
    nav.className = 'main-nav main-nav--opened';
  } else if (nav.className.indexOf('--opened') != -1) {
    nav.className = 'main-nav main-nav--closed';
  }
});
