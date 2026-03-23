"use strict"

if (window.matchMedia('(hover: none').matches) {
    let lastY = null;
    let progress = 0;
    const items = document.querySelectorAll('.item');
    const sensitivity = window.matchMedia('(orientation: portrait)').matches ? 0.002 : 0.01;

    window.addEventListener('touchstart', function (e) {
        lastY = e.touches[0].clientY;
    });

    window.addEventListener('touchmove', function(e) {
        
        const deltaY = lastY - e.touches[0].clientY;
        lastY = e.touches[0].clientY;
        
        const newProgress = progress + deltaY * sensitivity;

        if (isStatic && !show){
            return;
        } else if (newProgress <= 0) {
            progress = 0;
            document.body.style.overflow = '';
        } else if (newProgress >= 1) {
            progress = 1;
            document.body.style.overflow = '';
        } else {
            progress = newProgress;
            document.body.style.overflow = 'hidden';
        }
        
        items.forEach(item => item.style.setProperty('--progress', progress));

    }, {passive : true});

    window.addEventListener('touchend', function() {
        lastY = null;
    })
}