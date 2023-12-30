'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');
// let time,
// estimatedPrev,
// maxAnimationDurationMs = 2000,
// maxAnimationPositionPx = 300;

// function animateElement(element) {
//     debugger;
//     let position = getComputedStyle(element).transform;
//     if(!position || position === 'none') {
//         position = 0;
//     } else {
//         position = position.slice(7, -1).split(', ');
//         position = +position[position.length-1];
//     }

//     if(position < maxAnimationPositionPx) {
//         let estimated = new Date().getTime() - estimatedPrev;
//         console.log(estimated);
//         estimatedPrev = new Date().getTime();
//         let step = maxAnimationPositionPx / (maxAnimationDurationMs / estimated);
//         console.log(step);
//         position += step;
//         element.style.transform = `translateY(${position}px)`;
//         requestAnimationFrame(()=>{
//             animateElement(element);
//         });
//     } else {
//         let estimated = new Date().getTime() - time;
//         console.log(estimated);
//     }
// }
// btnPhone.addEventListener('click', ()=>{
//     debugger;
//     time = new Date().getTime();
//     estimatedPrev = time;
//     requestAnimationFrame(()=>{
//         animateElement(images[0])
//     });
// });

let animation;
btnPhone.addEventListener('click', ()=>{
    if(!animation) {
        animation = images[0].animate([
            {
                transform: 'translateY(0px)',
            },
            {
                transform: 'translateY(300px)',
                opacity: 0,
                display: 'none',
            },
        ], {
            duration: 5000,
            fill: 'forwards',
        });
    } else {
        if(animation.playState === 'running') {
            animation.pause();
        } else {
            if (animation.playState === 'paused') {
                animation.play();
            }
        }
    }
    if(animation.playState === 'idle') {
        animation.play();
    }
});
btnMacbook.addEventListener('click', ()=> {
    if(animation) {
        animation.cancel();
    }
});