
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    let scrollY = window.pageYOffset;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.menu a[href="#${id}"]`);
            if(activeLink) activeLink.classList.add('active');
        }
    });
});

// Animate skill bars on page load
window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

document.getElementById("projectBtn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
