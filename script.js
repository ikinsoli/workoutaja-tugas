// Mendapatkan elemen navbar
const navbar = document.querySelector("nav");

// Fungsi untuk menambahkan class sticky saat scroll
window.onscroll = function() {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// Fungsi untuk mendeteksi elemen yang masuk ke dalam viewport
function checkScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
}

// Menambahkan event scroll
window.addEventListener('scroll', checkScroll);

// Panggil fungsi sekali saat halaman pertama kali dimuat
checkScroll();
