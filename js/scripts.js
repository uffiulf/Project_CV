window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.cv-del');
    sections.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.3 + 0.5}s`;
    });
});
