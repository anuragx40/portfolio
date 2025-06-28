// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkEls = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Smooth scroll and active link highlight
navLinkEls.forEach(link => {
  link.addEventListener('click', function(e) {
    // Smooth scroll
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
    // Close mobile menu
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 80;
  navLinkEls.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLinkEls.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Optional: Animate project cards on hover (subtle scale)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 24px rgba(239,35,60,0.18)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});