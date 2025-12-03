console.log("[reveal.js] loaded");

const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        
        const delay = el.dataset.delay;
        if (delay) {
            el.style.setProperty('--delay', delay)
        }
        el.classList.add('is-visible')
        observer.unobserve(el);
    })
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
})

revealEls.forEach(el => revealObserver.observe(el))