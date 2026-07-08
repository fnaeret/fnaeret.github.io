document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Progress bar fill
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const progressBars = document.querySelectorAll('.bar-fill');

    const delay = prefersReducedMotion ? 0 : 200;

    setTimeout(() => {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            const scale = parseFloat(targetWidth) / 100;
            bar.style.transform = 'scaleX(' + scale + ')';
        });
    }, delay);
});
