"use strict"

if (window.matchMedia('(hover: none').matches) {
    const duration = 1000;
    const start = performance.now();

    function animate(now) {
        const progress = Math.min((now - start) / duration, 1);
        document.documentElement.style.setProperty('--progress', progress);
        if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

}
