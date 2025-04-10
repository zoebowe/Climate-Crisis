// Function to check if an element is in the viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to add the 'visible' class to elements as they scroll into view
function checkVisibility() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        if (isInView(element)) {
            element.classList.add('visible');
        }
    });
}

// Initial check on page load and continuous check on scroll
window.addEventListener('load', checkVisibility);  // On page load
window.addEventListener('scroll', checkVisibility); // On scroll

// Function to toggle the visibility of the navbar
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');  // Toggle the 'open' class to show/hide navbar
}

// Function to set the active class on the clicked link
function setActive(link) {
    // Remove the active class from all links
    document.querySelectorAll('.navbar a').forEach(item => {
        item.classList.remove('active');
    });

    // Add the active class to the clicked link
    link.classList.add('active');
}