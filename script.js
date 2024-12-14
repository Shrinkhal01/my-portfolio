function toggleMode() {
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        document.body.classList.replace("dark-mode", "light-mode");
        document.querySelector(".mode-toggle span").textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.replace("light-mode", "dark-mode");
        document.querySelector(".mode-toggle span").textContent = "🌞";
        localStorage.setItem("theme", "dark");
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.body.classList.add(
        savedTheme === "dark" || (!savedTheme && prefersDarkMode) ? "dark-mode" : "light-mode"
    );

    particlesJS("particles-js", {
        particles: {
            number: { value: 50 },
            size: { value: 3 },
            line_linked: { enable: true, color: "#ffffff" }, /* Subtle white lines */
        },
    });
};

// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in effect on scroll
window.addEventListener('scroll', function () {
    document.querySelectorAll('.section').forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionPos < viewportHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Initial fade-in load for visible sections
window.addEventListener('load', () => {
    document.querySelectorAll('.section').forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionPos < viewportHeight - 100) {
            section.classList.add('visible');
        }
    });
});
