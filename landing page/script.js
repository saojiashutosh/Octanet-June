// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // You can add your form submission logic here
});
