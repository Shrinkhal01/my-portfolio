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
    } else {
        document.body.classList.add(prefersDarkMode ? 'dark-mode' : 'light-mode');
    }

    particlesJS('particles-js', {
        particles: {
            number: { value: 40 },
            size: { value: 2 },
            line_linked: { enable: true, color: '#4299e1' }
        }
    });
};
