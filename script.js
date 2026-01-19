/* ===================================
   JAVASCRIPT - 5 STARS TRAINING
   =================================== */

// Intersection Observer pour les animations au scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    },
    { threshold: 0.1 }
);

// Observer tous les éléments avec fade-in-up quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    // Observer les animations
    document.querySelectorAll('.fade-in-up').forEach((el) => {
        observer.observe(el);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// Fonction pour scroller vers le contact
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Gestion de la soumission du formulaire
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Afficher un message de confirmation
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    
    // Réinitialiser le formulaire
    e.target.reset();
    
    // Vous pouvez ici ajouter l'envoi réel du formulaire vers un backend
    // Exemple avec fetch :
    /*
    const formData = new FormData(e.target);
    fetch('votre-url-backend', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Message envoyé avec succès !');
        e.target.reset();
    })
    .catch(error => {
        alert('Une erreur est survenue. Veuillez réessayer.');
        console.error('Erreur:', error);
    });
    */
}

// Effet de parallaxe léger sur le header (optionnel)
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScrollY = window.scrollY;
    
    // Réduire le header au scroll
    if (currentScrollY > 50) {
        header.classList.add('py-4');
        header.classList.remove('py-6');
    } else {
        header.classList.add('py-6');
        header.classList.remove('py-4');
    }
    
    lastScrollY = currentScrollY;
});

// Gestion du sélecteur de langue (à compléter selon vos besoins)
document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('header button');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Logique de changement de langue ici
            console.log('Langue sélectionnée:', button.textContent.trim());
        });
    });
});