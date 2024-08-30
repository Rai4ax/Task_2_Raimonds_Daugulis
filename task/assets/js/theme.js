document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('nav-links');
    const navContainer = document.querySelector('.nav-container');
    const hamburgerIcon = document.querySelector('#hamburger img'); // Select the img inside the hamburger div

    document.getElementById('hamburger').addEventListener('click', function() {
        // Toggle the visibility of the nav-links
        navLinks.classList.toggle('active');

        // Toggle the wave class on nav-container based on whether nav-links is active
        if (navLinks.classList.contains('active')) {
            navContainer.classList.remove('wave');
            // Change the hamburger icon to an X
            hamburgerIcon.src = 'assets/img/cross.svg'; // Replace with the path to your X icon
        } else {
            navContainer.classList.add('wave');
            // Change the icon back to the hamburger icon
            hamburgerIcon.src = 'assets/img/hamburger.svg'; // Replace with the path to your hamburger icon
        }
    });
    
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from nav-links
            navLinks.classList.remove('active');

            // Add the wave class back to nav-container
            navContainer.classList.add('wave');

            // Change the icon back to the hamburger icon
            hamburgerIcon.src = 'assets/img/hamburger.svg'; // Replace with the path to your hamburger icon
        });
    });
});
