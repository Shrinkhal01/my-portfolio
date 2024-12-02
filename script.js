function toggleMode() {
    const currentMode = document.body.classList.contains("dark-mode");
    const modeButton = document.querySelector(".mode-toggle");
    const modeIcon = document.querySelector(".mode-toggle span");

    if (currentMode) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        modeIcon.textContent = "🌞"; // Sun for light mode
        modeButton.setAttribute('aria-label', 'Switch to Dark Mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        modeIcon.textContent = "🌙"; // Moon for dark mode
        modeButton.setAttribute('aria-label', 'Switch to Light Mode');
        localStorage.setItem('theme', 'dark');
    }
}


// Auto-detect user preference on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        // Apply saved theme (dark or light)
        document.body.classList.add(savedTheme + '-mode');
        document.querySelector(".mode-toggle span").textContent = savedTheme === 'dark' ? '🌙' : '🌞';
    } else {
        // Default to dark mode if no saved preference
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkMode) {
            document.body.classList.add("dark-mode");
            document.querySelector(".mode-toggle span").textContent = '🌙';
        } else {
            document.body.classList.add("light-mode");
            document.querySelector(".mode-toggle span").textContent = '🌞';
        }
    }
};
