const main = document.querySelector('.container');
const insideText = document.querySelector('.text');

let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2; 
let holdTime = (totalTime / 5) 

breatheSection();

function breatheSection() {
    insideText.innerHTML = 'Breathe In!';
    main.className = 'container grow';

    setTimeout(() => {
        insideText.innerText = 'Hold';

        setTimeout(() => {
            insideText.innerText = 'Breathe Out!';
            main.className = 'container shrink'
        }, holdTime)
    }, breatheTime)

}



setInterval(breatheSection, totalTime);