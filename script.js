// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Preserve theme on reload
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded.');
});
