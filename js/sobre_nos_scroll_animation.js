document.addEventListener('DOMContentLoaded', () => {
    const pageElementos = document.querySelectorAll('.lazy-load');

    const options = {
        root: null, 
        threshold: 0.1, 
        rootMargin: "0px" 
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elements = entry.target;
                elements.classList.remove('lazy-load'); 
                elements.classList.add('show'); 
                observer.unobserve(elements); 
            }
        });
    }, options);

    pageElementos.forEach(img => {
        imageObserver.observe(img); // Observe each image
    });    
});

