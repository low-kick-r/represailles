"use strict"

const hamburger = document.getElementById('hamburger');
const homeOverlay = document.getElementById('homeOverlay');
let show = false;

function resetShow(){
    homeOverlay.classList.remove('show');
    hamburger.classList.remove('open');
    show = false;
}

hamburger.addEventListener('click', () => {
    if (!show){
        homeOverlay.classList.add('show')
        hamburger.classList.add('open');
        show = true;
    } 
    else resetShow();
});

window.addEventListener('pagehide', resetShow);


