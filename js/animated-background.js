const backgroundElement = document.getElementsByClassName("animated-background")[0]; // Access the first element directly

const minPosition = -56;
const maxPosition = 0;
const vertMouseStrength = 0.05;
const horiMouseStrength = 0.05;
const midPosition = minPosition + (maxPosition - minPosition) / 2;

//Set the initial background position

backgroundElement.style.left = midPosition + 'px';
backgroundElement.style.right = midPosition + 'px';
backgroundElement.style.top = midPosition + 'px';
backgroundElement.style.bottom = midPosition + 'px';

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;

addEventListener("mousemove", (event) => {
    //centered mouse position
    mouseX = event.clientX - screenWidth / 2;
    mouseY = event.clientY - screenHeight / 2;

    //console.log(`${mouseX},${mouseY}`);

    //set the image position while capping the value between the min and max position values
    backgroundElement.style.left = capValue(midPosition + mouseX * horiMouseStrength, minPosition, maxPosition) + 'px';
    backgroundElement.style.right = capValue(midPosition - mouseX * horiMouseStrength, minPosition, maxPosition) + 'px';
    backgroundElement.style.top = capValue(midPosition + mouseY * vertMouseStrength, minPosition, maxPosition) + 'px';
    backgroundElement.style.bottom = capValue(midPosition - mouseY * vertMouseStrength, minPosition, maxPosition) + 'px';

    // Update the lastMouseX and lastMouseY with the current mouse coordinates
    lastMouseX = mouseX;
    lastMouseY = mouseY;
});

addEventListener("resize", (event) => {
    //re-set the screen size values to the new size
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
    backgroundElement.style.left = midPosition + 'px';
    backgroundElement.style.right = midPosition + 'px';
    backgroundElement.style.top = midPosition + 'px';
    backgroundElement.style.bottom = midPosition + 'px';
})

function capValue(value, min, max) {
    return Math.max(Math.min(value, max), min);
}
