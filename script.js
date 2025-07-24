document.addEventListener('DOMContentLoaded', function () {
    // Hero Slideshow
    const slides = document.querySelectorAll('#hero .slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        slides[currentSlide].classList.add('active'); // Show first slide initially

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change slide every 5 seconds
    }

    // Navbar Scroll Spy
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
