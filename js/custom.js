
//Back__to__top
(function($) {
    'use strict';
  $(window).scroll(function(){
    if ($(this).scrollTop() > 40) {
      $('.scroll__top').fadeIn();
    } else {
      $('.scroll__top').fadeOut();
    }
  });
})(jQuery);

// smooth__scroll
$('.smooth__scroll').click(function() {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      1000
    );
    return false;
});

// Navbar__bgcolor
window.addEventListener('scroll', function() {
    let header = document.querySelector('nav');
    
    header.classList.toggle('bgcolor', window.scrollY > 0);
})

//Tooltip
const tooltip = document.querySelectorAll('tt')
  tooltip.forEach ( t => {
  new bootstrap.Tooltip(t)
})

//dark__theme
var icon = document.getElementById("icon");
icon.onclick = function() {
  document.body.classList.toggle("dark__theme");
  if (document.body.classList.contains("dark__theme")) {
    icon.src="images/sun.png";
  } else {
    icon.src="images/moon.png";
  }
}


