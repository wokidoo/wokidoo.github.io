
const opacityButton = document.getElementsByClassName("opacity-button")[0];
const header = document.getElementsByClassName("header-content")[0];
const about = document.getElementsByClassName("about")[0];
let isSeeThrough = false;

opacityButton.addEventListener("click", toggleOpacity);

document.getElementsByClassName("page-content")[0].style.opacity = 1;

function toggleOpacity(){

    if(isSeeThrough){
        header.style.opacity = 1;
        about.style.opacity = 1;
        isSeeThrough = false;
    }else{
        header.style.opacity = 0.25;
        about.style.opacity = 0.25;
        isSeeThrough = true;
    }
}