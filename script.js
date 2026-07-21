// ==============================
// Typing Effect
// ==============================

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Django Developer",
    "React Developer",
    "Python Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;

    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// Sticky Navbar
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Scroll Reveal Animation
// ==============================

const revealItems = document.querySelectorAll(
    ".glass-card,.skill,.project-card,.hero-content,.hero-image"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==============================
// Back To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ==============================
// Skill Bar Animation
// ==============================

const skillBars = document.querySelectorAll(".progress span");

const animateSkills = () => {

    skillBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 200);

    });

};

const skillSection = document.querySelector("#skills");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateSkills();

            observer.unobserve(skillSection);

        }

    });

}, {

    threshold: 0.4

});

observer.observe(skillSection);


// ==============================
// Contact Form Demo
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// ==============================
// Floating Tech Icons
// ==============================

const icons = document.querySelectorAll(".social-icons a");

icons.forEach((icon, index) => {

    icon.style.animation = `float 3s ease-in-out ${index * 0.3}s infinite`;

});


// ==============================
// Mouse Glow Effect
// ==============================

document.addEventListener("mousemove", (e) => {

    document.documentElement.style.setProperty(
        "--x",
        e.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--y",
        e.clientY + "px"
    );

});


// ==============================
// Fade-in Animation
// ==============================

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    observer2.observe(section);

});


// ==============================
// Console Welcome Message
// ==============================

console.log("%cWelcome to Sanju Sajeev's Portfolio", "color:#00d4ff;font-size:20px;font-weight:bold;");
console.log("%cPython Full Stack Developer", "color:#8a2be2;font-size:16px;");