// Function to toggle dark and light mode
function toggleMode() {
    const body = document.body;

    // Check if dark mode is already applied
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');  // Save light mode preference
    } else {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');  // Save dark mode preference
    }
}

// Auto-detect user preference on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        // Apply saved theme (dark or light)
        document.body.classList.add(savedTheme + '-mode');
    } else {
        // Default to dark mode if no saved preference
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.add("light-mode");
        }
    }
};
