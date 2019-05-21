
const lightButt = document.querySelector(".lightButton");
const bodyStyle = getComputedStyle(document.body);
const playValue = bodyStyle.getPropertyValue('--playState');


function turnOnLight () {
    if ((playValue === 'paused') || (playValue === ' paused')) {
        // document.body.style.setProperty('--toggle', '1');
        document.body.style.setProperty('--playState', 'running');
        console.log('boo');
    } else {
        // document.body.style.setProperty('--toggle', '0');
        document.body.style.setProperty('--playState', 'paused');
    }
}




lightButt.addEventListener('click', turnOnLight);