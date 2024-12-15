document.addEventListener("DOMContentLoaded", () => {
    const zoomButtons = document.querySelectorAll(".zoom-btn");
    const terminals = document.querySelectorAll(".terminal");
    const body = document.body;
  
    zoomButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click from propagating to the document
        const target = document.querySelector(btn.dataset.target);
  
        // If terminal is zoomed, toggle zoomed state
        if (target.classList.contains("zoomed")) {
          target.classList.remove("zoomed");
          body.classList.remove("zoom-active");
          body.classList.remove("background-blur");
        } else {
          // Zoom out all terminals first
          terminals.forEach((terminal) => terminal.classList.remove("zoomed"));
          target.classList.add("zoomed");
          body.classList.add("zoom-active");
          body.classList.add("background-blur");
        }
      });
    });
  
    // Close zoom when clicking outside the terminal
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".terminal.zoomed") && !e.target.classList.contains("zoom-btn")) {
        terminals.forEach((terminal) => terminal.classList.remove("zoomed"));
        body.classList.remove("zoom-active");
        body.classList.remove("background-blur");
      }
    });
  });