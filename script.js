function toggleMode() {
    const currentMode = document.body.classList.contains("dark-mode");
    if (currentMode) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        document.querySelector(".mode-toggle span").textContent = "🌞"; // Change to sun in light mode
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        document.querySelector(".mode-toggle span").textContent = "🌙"; // Change to moon in dark mode
        localStorage.setItem('theme', 'dark'); // Save preference
    }
}

// Auto-detect user preference on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const modeToggleSpan = document.querySelector(".mode-toggle span");

    if (savedTheme) {
        // Apply saved theme (dark or light)
        document.body.classList.add(savedTheme + '-mode');
        // Set the toggle icon based on the saved theme
        if (savedTheme === 'dark') {
            modeToggleSpan.textContent = "🌙"; // Set moon for dark mode
        } else {
            modeToggleSpan.textContent = "🌞"; // Set sun for light mode
        }
    } else {
        // Default to dark mode if no saved preference
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkMode) {
            document.body.classList.add("dark-mode");
            modeToggleSpan.textContent = "🌙"; // Set moon for dark mode
        } else {
            document.body.classList.add("light-mode");
            modeToggleSpan.textContent = "🌞"; // Set sun for light mode
        }
    }
};
