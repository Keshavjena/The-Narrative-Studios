function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  var hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("toggle");

  var links = document.querySelectorAll(".nav-links li");

  links.forEach(function(link, index) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fadeIn 0.5s ease-in-out forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
}

window.addEventListener('scroll', function() {
  var scrolled = window.pageYOffset;
  var image = document.querySelector('.hero-image');
  image.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
});


