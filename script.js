document.addEventListener('DOMContentLoaded', () => {
    // Inicializa ScrollReveal
    ScrollReveal().reveal('.hero-content h1', { delay: 200, distance: '50px', origin: 'top' });
    ScrollReveal().reveal('.hero-content .subheadline', { delay: 400, distance: '50px', origin: 'top' });
    ScrollReveal().reveal('.hero-content .btn', { delay: 600, distance: '50px', origin: 'bottom' });

    ScrollReveal().reveal('.how-we-help-section h2', { delay: 200, distance: '30px', origin: 'top' });
    ScrollReveal().reveal('.help-card', { interval: 150, distance: '40px', origin: 'bottom' });

    ScrollReveal().reveal('.why-novalaunch-section h2', { delay: 200, distance: '30px', origin: 'top' });
    ScrollReveal().reveal('.manifesto-phrase', { interval: 100, distance: '30px', origin: 'left' });
    ScrollReveal().reveal('.manifesto-highlight', { delay: 500, distance: '30px', origin: 'right' });

    ScrollReveal().reveal('.client-logos-section h2', { delay: 200, distance: '30px', origin: 'top' });
    ScrollReveal().reveal('.logo-item', { interval: 100, distance: '30px', origin: 'bottom' });

    ScrollReveal().reveal('.testimonials-section h2', { delay: 200, distance: '30px', origin: 'top' });
    ScrollReveal().reveal('.testimonial-card', { interval: 150, distance: '40px', origin: 'right' });

    ScrollReveal().reveal('.cta-banner-section h2', { delay: 200, distance: '30px', origin: 'top' });
    ScrollReveal().reveal('.cta-banner-section .btn', { delay: 400, distance: '30px', origin: 'bottom' });

    ScrollReveal().reveal('.contact-section h2', { delay: 200, distance: '30px', origin: 'top' });
    ScrollReveal().reveal('.contact-form', { delay: 300, distance: '50px', origin: 'bottom' });

    ScrollReveal().reveal('.footer-section', { delay: 200, distance: '30px', origin: 'bottom' });

    // Funcionalidade do menu hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (para mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('is-active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Simulação de envio de formulário
    const contactForm = document.querySelector('.contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Simula um envio bem-sucedido
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.style.display = 'block';

        // Limpa o formulário
        contactForm.reset();

        // Esconde a mensagem após alguns segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});
