"use strict"

function createClones(wrapperSelector, imgClass, cloneConfigs, varPrefix){
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const img = wrapper.querySelector(`${imgClass}`);

    cloneConfigs.forEach(config => {
        const clone = img.cloneNode();
        clone.style.setProperty('position', 'absolute');
        clone.style.setProperty('left', '0');
        clone.style.setProperty('top', '0');
        clone.style.setProperty(`--${varPrefix}-translate-x`, config.x);
        clone.style.setProperty(`--${varPrefix}-translate-y`, config.y);
        clone.style.setProperty(`--${varPrefix}-angle`, config.angle);
        clone.style.setProperty(`--${varPrefix}-scale`, config.scale);
        clone.style.setProperty(`--${varPrefix}-rotateY`, config.rotateY);

        wrapper.appendChild(clone);
    });

    console.log('wrapper :>> ', wrapper);
}

const membresBottomConfig = [
    { x: '0', y: '-30%', angle: '0', scale: '1', rotateY: '0'},
    { x: '0', y: '0', angle: '0', scale: '1', rotateY: '0'},
    { x: '0', y: '15%', angle: '0', scale: '1', rotateY: '0'},
];

const contactBottomConfig = [
    { x: '11%', y: '-36%', angle: '45deg', scale: '0.657', rotateY: '180deg'},
    { x: '11%', y: '25%', angle: '135deg', scale: '0.657', rotateY: '0'},
    { x: '90%', y: '25%', angle: '225deg', scale: '0.657', rotateY: '180deg'},
];

const contactTopConfig = [
    { x: '-42%', y: '20%', angle: '45deg', scale: '0.657', rotateY: '0'},
];

createClones(
    '.membres .bottom-wrapper',
    '.bottom',
    membresBottomConfig,
    'bottom'
)

createClones(
    '.contact .bottom-wrapper',
    '.bottom',
    contactBottomConfig,
    'bottom'
)

createClones(
    '.contact .top-wrapper',
    '.top',
    contactTopConfig,
    'top'
)
