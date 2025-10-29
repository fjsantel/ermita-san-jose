// Intersection Observer para animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {

    // Opciones del observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    // Crear el observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar todos los títulos de sección
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        observer.observe(title);
    });

    // Observar párrafos y bloques para fade-in
    const fadeElements = document.querySelectorAll('.column, .grid-item, .hero-quote, .support-text');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

});
