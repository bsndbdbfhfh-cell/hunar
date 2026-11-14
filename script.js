// Mobil menyu uchun logika
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Havolalar bosilganda menyuni yopish
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Aloqa formasini boshqarish
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message) {
        formStatus.style.color = '#10b981';
        formStatus.textContent = "Xabaringiz muvaffaqiyatli yuborildi! Tez orada bog'lanamiz.";
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.textContent = "";
        }, 5000);
    } else {
        formStatus.style.color = '#ef4444';
        formStatus.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
    }
});