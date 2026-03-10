"use strict"

document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.item');

    let armedItem = null;
    let timer = null;

    function resetArmed() {
        if (!armedItem) return;

        armedItem.classList.remove('touched');
        armedItem = null;

        clearTimeout(timer);
        timer = null;
    }

    function armItem(item){
        resetArmed();
        armedItem = item;
        item.classList.add('touched');
        timer = setTimeout(resetArmed, 3000);
    }
    
    function navigate(item){
        const link = item.querySelector('a[href]');
        if (link) {
            window.location.href = link.getAttribute('href');
            return true;
        }
        else return false;
    }

    items.forEach(item => {
        item.addEventListener('click', e => e.preventDefault())
    })

    items.forEach(item => {
        item.addEventListener('pointerup', (e) => {

            if (e.pointerType !== 'touch') {
                navigate(item);
                return;
            }
            
            e.preventDefault();
            
            if (armedItem === item) {
                if (!item.querySelector('a[href]')) resetArmed();
                navigate(item);
                return;
            }

            armItem(item);

        });
    });

    window.addEventListener('pageshow', resetArmed);


});