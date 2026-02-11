"use strict"

document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('.logo-link');

    let armedLogo = null;
    let timer = null;

    function resetArmed() {
        if (!armedLogo) return;

        armedLogo.classList.remove('touched');
        armedLogo = null;


        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function armLogo(logo){
        resetArmed();
        armedLogo = logo;
        logo.classList.add('touched');

        timer = setTimeout(resetArmed, 3000);
    }

    function navigate(link) {
        window.location.href = link.href;
    }

    links.forEach(link => {
        link.addEventListener("click", e => e.preventDefault());
    });


    links.forEach(link => {
        const logo = link.querySelector('.logo');
        if (!logo) return;

        logo.addEventListener('pointerup', (e) => {
    
            if (e.pointerType !== 'touch') return;
    
            e.preventDefault();
    
            if (armedLogo === logo) {
                resetArmed();
                navigate(link);
                return;
            }
    
            armLogo(logo);
    
        });

    })
    


    window.addEventListener('pageshow', resetArmed);
    
});
