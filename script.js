
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');


document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});


closeBtn.addEventListener('click', function () {
    lightbox.style.display = 'none';
});


const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});
