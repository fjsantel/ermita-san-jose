// Intersection Observer para animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Navigation Menu - Dropdown
    // ========================================
    const menuButton = document.getElementById('menuButton');
    const dropdownContent = document.getElementById('dropdownContent');
    const navMenu = document.getElementById('navMenu');
    let lastScrollTop = 0;

    // Toggle dropdown menu
    if (menuButton && dropdownContent) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            menuButton.classList.toggle('active');
            dropdownContent.classList.toggle('active');
        });

        // Close dropdown when clicking a link
        const dropdownLinks = dropdownContent.querySelectorAll('.dropdown-link');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuButton.classList.remove('active');
                dropdownContent.classList.remove('active');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuButton.contains(e.target) && !dropdownContent.contains(e.target)) {
                menuButton.classList.remove('active');
                dropdownContent.classList.remove('active');
            }
        });
    }

    // Hide/show navigation on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Close dropdown when scrolling
            if (menuButton && dropdownContent) {
                menuButton.classList.remove('active');
                dropdownContent.classList.remove('active');
            }

            // Only hide nav when scrolling down and past 100px
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navMenu.classList.add('hidden');
            } else {
                navMenu.classList.remove('hidden');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, 50);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Scroll Animations
    // ========================================

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

                // Si el elemento tiene highlights dentro, animarlos secuencialmente
                const highlights = entry.target.querySelectorAll('.highlight');
                highlights.forEach((highlight, index) => {
                    setTimeout(() => {
                        highlight.classList.add('visible');
                    }, index * 150); // 150ms de delay entre cada highlight
                });
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

    // Observar elementos con texto (párrafos) para animar highlights
    const textElements = document.querySelectorAll('p');
    textElements.forEach(element => {
        if (element.querySelector('.highlight')) {
            observer.observe(element);
        }
    });

});
