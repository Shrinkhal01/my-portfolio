"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var zoomButtons = document.querySelectorAll(".zoom-btn");
  var terminals = document.querySelectorAll(".terminal");
  var body = document.body;
  zoomButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the click from propagating to the document

      var target = document.querySelector(btn.dataset.target); // If terminal is zoomed, toggle zoomed state

      if (target.classList.contains("zoomed")) {
        target.classList.remove("zoomed");
        body.classList.remove("zoom-active");
        body.classList.remove("background-blur");
      } else {
        // Zoom out all terminals first
        terminals.forEach(function (terminal) {
          return terminal.classList.remove("zoomed");
        });
        target.classList.add("zoomed");
        body.classList.add("zoom-active");
        body.classList.add("background-blur");
      }
    });
  }); // Close zoom when clicking outside the terminal

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".terminal.zoomed") && !e.target.classList.contains("zoom-btn")) {
      terminals.forEach(function (terminal) {
        return terminal.classList.remove("zoomed");
      });
      body.classList.remove("zoom-active");
      body.classList.remove("background-blur");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var zoomButtons = document.querySelectorAll(".zoom-btn");
  var terminals = document.querySelectorAll(".terminal");
  var body = document.body;
  zoomButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the click from propagating to the document

      var target = document.querySelector(btn.dataset.target);

      if (target.classList.contains("zoomed")) {
        target.classList.remove("zoomed");
        body.classList.remove("zoom-active");
        body.classList.remove("background-blur");
      } else {
        terminals.forEach(function (terminal) {
          return terminal.classList.remove("zoomed");
        });
        target.classList.add("zoomed");
        body.classList.add("zoom-active");
        body.classList.add("background-blur");
      }
    });
  }); // Close zoom when clicking outside the terminal

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".terminal.zoomed") && !e.target.classList.contains("zoom-btn")) {
      terminals.forEach(function (terminal) {
        return terminal.classList.remove("zoomed");
      });
      body.classList.remove("zoom-active");
      body.classList.remove("background-blur");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var zoomButtons = document.querySelectorAll(".zoom-btn");
  var terminals = document.querySelectorAll(".terminal");
  var body = document.body;
  zoomButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the click from propagating to the document

      var target = document.querySelector(btn.dataset.target);

      if (target.classList.contains("zoomed")) {
        target.classList.remove("zoomed");
        body.classList.remove("zoom-active");
        body.classList.remove("background-blur");
      } else {
        terminals.forEach(function (terminal) {
          return terminal.classList.remove("zoomed");
        });
        target.classList.add("zoomed");
        body.classList.add("zoom-active");
        body.classList.add("background-blur");
      }
    });
  }); // Close zoom when clicking outside the terminal

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".terminal.zoomed") && !e.target.classList.contains("zoom-btn")) {
      terminals.forEach(function (terminal) {
        return terminal.classList.remove("zoomed");
      });
      body.classList.remove("zoom-active");
      body.classList.remove("background-blur");
    }
  });
});