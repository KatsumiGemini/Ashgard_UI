document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinksMobile = document.getElementById('navLinksMobile');
    // Select all menu links inside the mobile navigation
    const navLinks = document.querySelectorAll('.nav-links-mobile a'); 

    // Function to TOGGLE the menu state (opens or closes)
    function toggleMenu() {
        // Toggles 'active' on hamburger icon (for the X animation)
        hamburger.classList.toggle('active'); 
        // Toggles 'active' on the menu list (to show/hide it)
        navLinksMobile.classList.toggle('active'); 
    }

    // Event listener for the HAMBURGER icon click
    hamburger.addEventListener('click', toggleMenu);

    // Event listener for MENU LINK clicks (this is the key part)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if the menu is open and if the link is a valid internal link
            if (navLinksMobile.classList.contains('active')) {
                // Calls the same function used by the hamburger to close the menu
                toggleMenu(); 
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

//Nave menu highlight
document.addEventListener('DOMContentLoaded', () => {
 
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });
    
    // // sets home as active
    // const homeLink = document.querySelector('.main-nav a[href="#"]');
    // if (homeLink) {
    //     homeLink.classList.add('active');
    // }
});

//======Reveal on scroll animation=======
 const reveals = document.querySelectorAll('.reveal, .shape, .parallelogram, .floating-cards, .service-box, .reveal-left,  .reveal-right, .reveal-up, .reveal-down');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.5});

  reveals.forEach(el => observer.observe(el));
//Enhanced Navbar scroll effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.main-nav');
  if (window.scrollY > 100) { 
    nav.classList.add('visible', 'scrolled');
  } else {
    nav.classList.remove('visible', 'scrolled');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });
  document.querySelectorAll(".floating-cards").forEach(el => observer.observe(el));
});

//=====when clicked navbar link, add active class to it and remove from others=========
const mainCard = document.querySelector('.card-main img');
const leftCard = document.querySelector('.card-left img');
const rightCard = document.querySelector('.card-right img');

function rotateImages() {
  // Save current image src
  const mainSrc = mainCard.src;
  const leftSrc = leftCard.src;
  const rightSrc = rightCard.src;

  // Rotate images
  mainCard.src = leftSrc;
  leftCard.src = rightSrc;
  rightCard.src = mainSrc;
}

// Rotate every 3 seconds
setInterval(rotateImages, 5000);

//send message
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "") {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields before submitting.",
      });
      return;
    }

    Swal.fire({
      title: "Thank you "+ name + "!",
      text: "We will respond shortly in email!",
      icon: "success"
    });
    this.reset();
  });
  
//when "See More" is clicked
  document.addEventListener('DOMContentLoaded', function() {
  // Select all "See More" toggle buttons
  const toggleButtons = document.querySelectorAll('.see-more-toggle');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the parent .card-content
      const cardContent = this.closest('.card-content'); 
      // Find the text wrapper within this card
      const textWrapper = cardContent.querySelector('.service-description-wrapper');

      // Toggle the 'expanded' class on the text wrapper
      textWrapper.classList.toggle('expanded');
      
      // Toggle the 'active' class on the button itself (for arrow rotation)
      this.classList.toggle('active');

      // Change the button text
      if (textWrapper.classList.contains('expanded')) {
        this.innerHTML = 'See Less <i class="bi bi-arrow-up-short"></i>';
      } else {
        this.innerHTML = 'See More <i class="bi bi-arrow-down-short"></i>';
      }
    });
  });
});