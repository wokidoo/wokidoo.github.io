
const opacityButton = document.getElementsByClassName("opacity-button")[0];
const homeButton = document.getElementsByClassName("home-button");
const homeContent = document.getElementsByClassName("home-content")[0];
const experienceButton = document.getElementsByClassName("experience-button");
const experienceContent = document.getElementsByClassName("experience-content")[0];
const header = document.getElementsByClassName("header-content")[0];
const mainContainer = document.getElementsByClassName("main-container")[0];
let isSeeThrough = false;

opacityButton.addEventListener("click", toggleOpacity);
homeButton[0].addEventListener("click", goHome);
homeButton[1].addEventListener("click", goHome);
experienceButton[0].addEventListener("click", goExperience);
experienceButton[1].addEventListener("click", goExperience);

document.getElementsByClassName("page-content")[0].style.opacity = 1;
document.getElementsByClassName("experience-content")[0].style.display = "none";

function toggleOpacity(){

    if(isSeeThrough){
        header.style.opacity = 1;
        mainContainer.style.opacity = 1;
        isSeeThrough = false;
    }else{
        header.style.opacity = 0.25;
        mainContainer.style.opacity = 0.25;
        isSeeThrough = true;
    }
}

function goHome(){
    console.log("going home");
    homeContent.style.display = "flex";
    experienceContent.style.display = "none";
}

function goExperience(){
    console.log("going experience");
    homeContent.style.display = "none";
    experienceContent.style.display = "flex";
}