"use strict";
// Get saved data from sessionStorage
let activeLink = sessionStorage.getItem("activeLink");

// Highlight active link
if (activeLink) {
    let activeElement = document.querySelector(
        'nav a[href="' + activeLink + '"]'
    );
    if (activeElement) {
        activeElement.classList.add("active");
    }
}

// Handle click event on nav a
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        // Remove active class from all links
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
        });

        // Add active class to clicked link
        this.classList.add("active");

        // Save data to sessionStorage
        sessionStorage.setItem("activeLink", this.getAttribute("href"));
    });
});
