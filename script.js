function toggleMode() {
    const currentMode = document.body.classList.contains("dark-mode");

    if (currentMode) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        document.querySelector(".mode-toggle span").textContent = "🌞"; 
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        document.querySelector(".mode-toggle span").textContent = "🌙"; 
        localStorage.setItem('theme', 'dark');
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme + '-mode');
        document.querySelector(".mode-toggle span").textContent = savedTheme === 'dark' ? '🌙' : '🌞';
    } else {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkMode) {
            document.body.classList.add("dark-mode");
            document.querySelector(".mode-toggle span").textContent = '🌙';
        } else {
            document.body.classList.add("light-mode");
            document.querySelector(".mode-toggle span").textContent = '🌞';
        }
    }

    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { speed: 2 },
            line_linked: { enable: true, color: '#4299e1', opacity: 0.3, width: 2 }
        }
    });
};
