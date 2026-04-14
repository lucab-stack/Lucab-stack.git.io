// Menú móvil
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255,255,255,0.98)';
        header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255,255,255,0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Smooth scroll para botones de contacto
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.service-card, .benefit, .testimonial').forEach(el => {
    observer.observe(el);
});

// Efecto de contador para números (opcional)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(start);
    }, 16);
}

// WhatsApp click tracking (opcional)
document.querySelectorAll('.btn-whatsapp, a[href*="wa.me"]').forEach(btn => {
    btn.addEventListener('click', () => {
        // Aquí podrías agregar analíticas
        console.log('WhatsApp clicked');
    });
});

// Prevenir zoom en inputs (mejora mobile)
document.addEventListener('touchstart', function() {}, true);

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax sutil para hero (opcional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    }
});