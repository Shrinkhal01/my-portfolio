"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var zoomButtons = document.querySelectorAll('.zoom-btn');
  zoomButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.querySelector(this.dataset.target);
      target.classList.toggle('zoomed');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = link.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});