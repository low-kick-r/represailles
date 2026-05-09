"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const hoverCapable = window.matchMedia("(hover: hover)").matches;

    if (!hoverCapable){

        const homeWindow = document.querySelector(".window_home");

        if (homeWindow.classList.contains("stagger-reveal")){
            requestAnimationFrame(() => {
                homeWindow.classList.add("reveal")
            })
        }

        if (homeWindow.classList.contains("instant-open")){
            homeWindow.classList.add("open");
        }

    }

    if (!hoverCapable){

        const button = document.querySelector(".button")
        if (!button) return;

        const activableItems = document.querySelectorAll(".activable");
        
        button.addEventListener("click", () => {
            activableItems.forEach((item) => {
                item.classList.toggle("active");
            });
        });

    }

})