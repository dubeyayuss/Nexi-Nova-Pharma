// Navbar background on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Fade-in animation for all sections
const faders = document.querySelectorAll("section, .card, .vmf-box");

const appear = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";
        }
    });
}, { threshold: 0.2 });

faders.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s ease";
    appear.observe(item);
});
