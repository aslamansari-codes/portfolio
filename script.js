// Smooth scroll functionality remains unchanged.
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Initialize ScrollReveal for elements with the 'fade-in' class.
  ScrollReveal().reveal('.fade-in', {
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    easing: 'ease-in-out',
    interval: 100
  });
// Dark/Light Theme Toggle
const themeToggle = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  themeToggle.classList.toggle('fa-sun');
  themeToggle.classList.toggle('fa-moon');
});
  
  