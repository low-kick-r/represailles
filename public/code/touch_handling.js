"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const hoverCapable = window.matchMedia("(hover: hover)").matches;
    
    // STAGGER

    if (!hoverCapable){

        const staggerItems = document.querySelectorAll(".stagger");
        if (!staggerItems) return;
        console.log('staggerItems :>> ', staggerItems);
        
        staggerItems.forEach((item, i) => {
            setTimeout(() => {
                item.classList.add("active");
            }, (i + 2) * 500);
        });
    } 

    // NON_CURRENT
    
    if (!hoverCapable){
        
        const nonCurrentItems = document.querySelectorAll(".non_current");
        if (!nonCurrentItems) return;
        
        nonCurrentItems.forEach((item) => {
            item.classList.add("active");
        });
    }
    
    
    // BUTTON_ITEMS
    
    if (!hoverCapable){
    
        const buttonItems = document.querySelectorAll(".button_item");
        const button = document.querySelector(".button")
        if (!buttonItems || !button) return;
        
        button.classList.toggle("faux");
        
        button.addEventListener("click", () => {
            buttonItems.forEach((item) => {
                item.classList.toggle("active");
            })
            button.classList.toggle("vrai");
            button.classList.toggle("faux");
        });
        
    }
    
});