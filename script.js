// Función para mostrar/ocultar el menú en dispositivos móviles
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    if (nav) {
        nav.classList.toggle('show');
    }
}

// Evento para el botón de menú
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// Función para mostrar/ocultar el botón de scroll to top
function toggleScrollToTop() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }
}

// Evento para mostrar/ocultar el botón de scroll to top
window.addEventListener('scroll', toggleScrollToTop);

// Función para hacer scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Evento para el botón de scroll to top
const scrollToTopButton = document.getElementById('scroll-to-top');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
}

// Animación de entrada para los títulos de las secciones
function animateSectionTitles() {
    const titles = document.querySelectorAll('h2');
    titles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        observer.observe(title);
    });
}

// Ejecutar la animación de los títulos cuando la página se carga
window.addEventListener('load', animateSectionTitles);
