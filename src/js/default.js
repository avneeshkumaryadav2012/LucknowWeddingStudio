var WOW = require('wowjs').WOW;
var WebFont = require('webfontloader');

// Setup WOW.js
var wow = new WOW({
  boxClass:     'content-block',
  animateClass: 'active',
  offset:       1,
  mobile:       true,
  live:         false
});
// Initiate WOW.js
wow.init();

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Open Sans:400,700', 'Yeseva One:400']
  }
});

document.addEventListener('click', function(e) {
  var element = event.target;
  if (element.closest('[data-hash-link]') !== null) {
    e.preventDefault();
    var id = element.href.split('#')[1];
    var target = document.getElementById(id);
    target.scrollIntoView({ behavior: 'smooth' })
  }
});