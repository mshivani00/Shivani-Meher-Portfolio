// Active navbar effect
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    navLinks.forEach(nav => {
      nav.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// Typing Animation
const typingText = document.getElementById("typing-text");

const text = "Shivani Meher";

let index = 0;

function typeEffect() {

  typingText.textContent = text.slice(0, index);

  index++;

  if(index <= text.length){
    setTimeout(typeEffect, 120);
  }
}

typeEffect();

// About section fade animation

const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {

  const sectionPosition = aboutSection.getBoundingClientRect().top;

  const screenPosition = window.innerHeight / 1.2;

  if(sectionPosition < screenPosition){
    aboutSection.classList.add("show-about");
  }

});

// =========================
// Project Section Animation
// =========================

const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

  projectCards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    const triggerPoint = window.innerHeight / 1.15;

    if(cardTop < triggerPoint){
      card.classList.add("show-project");
    }

  });

});

// =========================
// Contact Form
// =========================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

  contactForm.reset();

});