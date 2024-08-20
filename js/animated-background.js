
let text = '{ "a": [' +
    '{ "zIndex": -2, "minPosition": -56, "maxPosition": 0, "horiMouseStrength": 0.01, "vertMouseStrength": 0.01, "url": "img/stars3.png" },'+
    '{ "zIndex": -2, "minPosition": -56, "maxPosition": 0, "horiMouseStrength": 0.02, "vertMouseStrength": 0.01, "url": "img/stars2.png" },'+
    '{ "zIndex": -1, "minPosition": -72, "maxPosition": 0, "horiMouseStrength": 0.03, "vertMouseStrength": 0.03, "url": "img/stars1.png" }'+
']}';

const backgroundData = JSON.parse(text);

const backgroundElement = document.getElementsByClassName("animated-background"); // Access the first element directly

//Set the initial background position
for (let i = 0; i < backgroundData.a.length;i++){
    let t_minPosition = backgroundData.a[i].minPosition;
    let t_maxPosition = backgroundData.a[i].maxPosition;
    //set midPosition
    backgroundData.a[i].midPosition = t_minPosition + (t_maxPosition - t_minPosition)/2;

    backgroundElement[i].style.left = `${backgroundData.a[i].midPosition}px`;
    backgroundElement[i].style.right = `${backgroundData.a[i].midPosition}px`;
    backgroundElement[i].style.top = `${backgroundData.a[i].midPosition}px`;
    backgroundElement[i].style.bottom = `${backgroundData.a[i].midPosition}px`;
    backgroundElement[i].style.zIndex = `${backgroundData.a[i].zIndex}`;
    backgroundElement[i].style.backgroundImage = `url(${backgroundData.a[i].url})`;

}

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

let mouseX = 0;
let mouseY = 0;

function handleMouseMove(event) {
    //centered mouse position
    mouseX = event.clientX - screenWidth / 2;
    mouseY = event.clientY - screenHeight / 2;

    updateBackgroundPosition();
}

function handleDeviceMotion(event) {

    let accX = event.accelerationIncludingGravity.x;
    let accY = event.accelerationIncludingGravity.y;

    mouseX = accX * 10;
    mouseY = accY * 10;

    updateBackgroundPosition();
}

function updateBackgroundPosition(){
    for (let i = 0; i < backgroundElement.length; i++) {

        let t_minPosition = backgroundData.a[i].minPosition;
        let t_maxPosition = backgroundData.a[i].maxPosition;
        let t_horiMouseStrength = backgroundData.a[i].horiMouseStrength;
        let t_vertMouseStrength = backgroundData.a[i].vertMouseStrength;
        let t_midPosition = backgroundData.a[i].midPosition;

        backgroundElement[i].style.left = capValue(t_midPosition + mouseX * t_horiMouseStrength, t_minPosition, t_maxPosition) + 'px';
        backgroundElement[i].style.right = capValue(t_midPosition - mouseX * t_horiMouseStrength, t_minPosition, t_maxPosition) + 'px';
        backgroundElement[i].style.top = capValue(t_midPosition + mouseY * t_vertMouseStrength, t_minPosition, t_maxPosition) + 'px';
        backgroundElement[i].style.bottom = capValue(t_midPosition - mouseY * t_vertMouseStrength, t_minPosition, t_maxPosition) + 'px';
    }
}

addEventListener("mousemove", handleMouseMove);

if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", handleDeviceMotion);
} else {
    console.log("DeviceMotionEvent is not supported on this device.");
}


addEventListener("resize", (event) => {
    //re-set the screen size values to the new size
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
    for (let i = 0; i < backgroundElement.length; i++) {
        let t_minPosition = backgroundData.a[i].minPosition;
        let t_maxPosition = backgroundData.a[i].maxPosition;
        //set midPosition
        backgroundData.a[i].midPosition = t_minPosition + (t_maxPosition - t_minPosition) / 2;

        backgroundElement[i].style.left = `${backgroundData.a[i].midPosition}px`;
        backgroundElement[i].style.right = `${backgroundData.a[i].midPosition}px`;
        backgroundElement[i].style.top = `${backgroundData.a[i].midPosition}px`;
        backgroundElement[i].style.bottom = `${backgroundData.a[i].midPosition}px`;

    }
})

function capValue(value, min, max) {
    return Math.max(Math.min(value, max), min);
}
