// Smooth Scroll for Internal Links with Enhancements
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 70; // Adjust for a fixed header (set to your header height)

            // Smooth scroll to the target element
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });

            // Update URL hash without jumping
            history.pushState(null, null, targetId);

            // Highlight active link
            document.querySelectorAll('a[href^="#"]').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        } else {
            console.error(`Target element "${targetId}" not found.`);
        }
    });
});

// Optional: Automatically highlight links as you scroll
window.addEventListener('scroll', () => {
    const offset = 70; // Adjust to match the offset above
    const sections = document.querySelectorAll('section'); // Assuming target sections have <section> tags

    let currentId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        if (window.scrollY >= sectionTop) {
            currentId = `#${section.id}`;
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        if (link.getAttribute('href') === currentId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Change navbar background color on scroll (when reaching the "About" section)
    const navbar = document.querySelector('.navbar');
    const aboutSection = document.querySelector('#about');
    const aboutOffsetTop = aboutSection.offsetTop - navbar.offsetHeight; // Account for navbar height

    if (window.scrollY >= aboutOffsetTop) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Effect for Hero Section
const phrases = [
    "Web Designer",
    "Web Developer",
    "Front End Developer",
    "Apps Designer",
    "Apps Developer"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const typedTextElement = document.querySelector(".typed-text");

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        currentCharIndex--;
    } else {
        currentCharIndex++;
    }

    typedTextElement.textContent = currentPhrase.substring(0, currentCharIndex);

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // Pause after typing a phrase
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
    }

    const typingSpeed = isDeleting ? 100 : 150;
    setTimeout(type, typingSpeed);
}

type();

// JavaScript to toggle the navbar
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
