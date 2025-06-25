document.addEventListener('DOMContentLoaded', function() {
    // Mobiele navigatie toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Update aria-expanded attribuut voor toegankelijkheid
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
        });
        
        // Close mobile menu when nav items are clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Only close menu if it's open (has 'active' class)
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
      // Getypte tekst animatie
    const typedTextElement = document.querySelector('.typed-text');
    const phrases = ['Software Developer', 'Ontwerper', 'Freelancer', 'Probleemoplosser'];
    if (typedTextElement) {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pauze aan het einde van de zin
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        setTimeout(typeEffect, 1000);
    }
    
    // Vloeiend scrollen voor ankerlinks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Focus instellen op het doelelement voor toegankelijkheid
                history.pushState(null, null, this.getAttribute('href'));
                target.setAttribute('tabindex', '-1');
                target.focus({preventScroll: true});
            }
        });
    });
    
    // Terug naar boven knop
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }    // Eenvoudige formuliervalidatie
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    // Functie voor formuliervalidatie (aanroep via onsubmit in HTML)
    function validateForm() {
        // Basis formulier validatie
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            formMessage.className = 'form-message error';
            formMessage.innerHTML = 'Vul alstublieft alle verplichte velden in.';
            return false;
        }
        
        formMessage.className = 'form-message success';
        formMessage.innerHTML = 'Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.';
        
        // Voor een echt werkend contactformulier moet je deze code vervangen door:
        // - een email service zoals EmailJS, FormSubmit of Formspree
        // - of serverside code als je het hostingplan dat ondersteunt
        
        // Voorkom daadwerkelijke submissie - deze regel verwijderen wanneer je een werkende oplossing implementeert
        return false;
    }
    
    // Intersection Observer voor animaties
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observeer alle elementen met animatieklassen
    document.querySelectorAll('.fade-in, .slide-in').forEach(element => {
        observer.observe(element);
    });
});
