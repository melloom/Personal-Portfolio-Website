// Dark mode toggle
const themeSwitch = document.getElementById('themeSwitch');

// Check for saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  
  // Animate hamburger to X
  const spans = this.querySelectorAll('span');
  if (navLinks.classList.contains('active')) {
    spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Typing effect with more titles
const typedTextSpan = document.querySelector('.typed-text');
const words = [
  "Sales Expert", 
  "Customer Service Specialist", 
  "Claims Professional", 
  "Team Leader", 
  "Fleet Insurance Specialist",
  "COVID Response Professional",
  "Data Management Specialist",
  "Customer Relations Manager"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeEffect() {
  isEnd = false;
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  
  // If word is complete
  if (!isDeleting && charIndex === currentWord.length) {
    isEnd = true;
    isDeleting = true;
    // Pause at the end of typing
    setTimeout(function() {
      typeEffect();
    }, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    // Move to next word
    wordIndex = (wordIndex + 1) % words.length;
    // Pause before typing next word
    setTimeout(function() {
      typeEffect();
    }, 500);
  } else {
    // Speed based on whether typing or deleting
    setTimeout(function() {
      typeEffect();
    }, isDeleting ? 50 : 100);
  }
}

// Start the typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
  if (typedTextSpan) {
    setTimeout(typeEffect, 1000);
  }
  
  // Add smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          const spans = mobileMenuBtn.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      }
    });
  });
  
  // Set active nav link based on scroll position
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, header');
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
  // Handle animations when elements come into view
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-right, .slide-left');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add animation to decorative shapes
  const shapes = document.querySelectorAll('.decorative-shape');
  shapes.forEach((shape, index) => {
    // Start with opacity 0
    shape.style.opacity = '0';
    
    // Animate in with slight delay between each
    setTimeout(() => {
      shape.style.transition = 'opacity 1.5s ease-out';
      shape.style.opacity = '0.2'; // Final opacity
    }, 300 + (index * 150));
  });
  
  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Simple validation
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
      
      // Show success message (in a real setup, you'd send this data to a backend)
      alert(`Thanks for your message, ${nameInput.value}! I'll get back to you soon.`);
      
      // Clear form
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    });
  }
});
