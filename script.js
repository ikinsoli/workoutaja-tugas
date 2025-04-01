const navbar = document.querySelector("nav");

window.onscroll = function() {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

function checkScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);

checkScroll();
