// =====================
// SCROLL SUAVE
// =====================
const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));

    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// =====================
// HEADER SOMBRA AL SCROLL
// =====================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});
