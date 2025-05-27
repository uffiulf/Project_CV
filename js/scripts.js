window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.cv-del');
    sections.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.3 + 0.5}s`;
    });
});
// Scroll-triggered animasjon med delay per seksjon
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.cv-del').forEach((section, i) => {
    section.style.transitionDelay = `${i * 0.2}s`;
    observer.observe(section);
});

// Smooth scroll for navigasjonslenker
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});