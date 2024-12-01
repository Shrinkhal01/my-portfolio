// Auto-detect user preference
window.onload = () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
};
// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
