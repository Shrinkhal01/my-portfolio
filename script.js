function toggleMode() {
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        document.body.classList.replace("dark-mode", "light-mode");
        document.querySelector(".mode-toggle span").textContent = "🌞";
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.replace("light-mode", "dark-mode");
        document.querySelector(".mode-toggle span").textContent = "🌙";
        localStorage.setItem('theme', 'dark');
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
        document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
        document.querySelector(".mode-toggle span").textContent = savedTheme === 'dark' ? '🌙' : '🌞';
    } else {
        document.body.classList.add(prefersDarkMode ? 'dark-mode' : 'light-mode');
        document.querySelector(".mode-toggle span").textContent = prefersDarkMode ? '🌙' : '🌞';
    }

    // Initialize particles.js after the page loads
    particlesJS('particles-js', {
        particles: {
            number: { value: 40 }, // Fewer particles for better performance
            size: { value: 2 }, // Smaller particles
            move: { speed: 1 }, // Slower movement
            line_linked: {
                enable: true,
                color: '#4299e1',
                opacity: 0.3,
                width: 1,
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
            }
        }
    });
};
