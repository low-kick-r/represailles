"use strict"

const logoLink = document.querySelector('.logo-link');
const logo = document.querySelector('.logo');
let touched = false;
let resetTimer = null;

logoLink.addEventListener('touchstart', function(e){
    e.preventDefault();

    if (!touched){
        logo.classList.add('touched');
        touched = true;
        resetTimer = setTimeout(function(){
            logo.classList.remove('touched');
            touched = false;
        }, 3000);
        console.log('resetTimer :>> ', resetTimer);
        console.log('touched :>> ', touched);

    } else {
        clearTimeout(resetTimer);
        window.location.href = logoLink.getAttribute('href');
    }
});

