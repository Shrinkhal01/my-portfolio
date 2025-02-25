document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        // Optional: Remove show class to reanimate on scroll out/in
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.1 });

  hiddenElements.forEach(el => observer.observe(el));
});
