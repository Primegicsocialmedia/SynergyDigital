document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbarToggle');
    const menu = document.getElementById('navbarMenu');

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

window.addEventListener('scroll', function() {
    const image = document.querySelector('.animated-image');
    if (image) {
        const scrollPosition = window.scrollY;
        // Rotate the image slightly on scroll
        image.style.transform = `rotate(${scrollPosition / 30}deg)`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const email = document.getElementById('email').value.trim();
        const cellnumber = document.getElementById('cellnumber').value.trim();

        if (!name || !surname || !email || !cellnumber) {
            alert('Please fill in all fields.');
            return;
        }

        // Optionally, you could add more sophisticated validation here

        // If validation passes, show a confirmation message
        alert('Thank you for contacting us! We will get back to you shortly.');

        // Optionally, you could clear the form here
        form.reset();
    });
});