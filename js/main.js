
const opacityButton = document.getElementsByClassName("opacity-button")[0];

const homeButton = document.getElementsByClassName("home-button");
const homeSubpage = document.getElementById("home-subpage");

const resumeButton = document.getElementsByClassName("experience-button");
const resumeSubpage = document.getElementById("resume-subpage");

const projectsButton = document.getElementsByClassName("projects-button");
const projectsSubpage = document.getElementById("projects-subpage");

const header = document.getElementsByClassName("header-content")[0];
const mainContainer = document.getElementsByClassName("main-container")[0];
let isSeeThrough = false;

opacityButton.addEventListener("click", toggleOpacity);
homeButton[0].addEventListener("click", () => { changePage("home-subpage") });
homeButton[1].addEventListener("click", () => { changePage("home-subpage") });
resumeButton[0].addEventListener("click", () => {changePage("resume-subpage")});
resumeButton[1].addEventListener("click", () => {changePage("resume-subpage")});
projectsButton[0].addEventListener("click", () => { changePage("projects-subpage") });
projectsButton[1].addEventListener("click", () => { changePage("projects-subpage") });

const inAnimationSpeed = 0.5;
const outAnimationSpeed = 1;

const inAnimations = ["yRotateIn", "xRotateIn", "slideInLeft"];
const inAnimationSpeeds = [0.5, 0.5, 0.5];
// const outAnimations = ["yRotateOut", "xRotateOut", "slide-out-left","frameDrop"];
// const outAnimationSpeeds = [0.5,0.5,0.5,1];
const outAnimations = ["pushAndTurn"];
const outAnimationSpeeds = [3];



function getRandomIndex(maxIndex){
    return Math.floor(Math.random() * maxIndex);
}

function toggleOpacity(){

    if(isSeeThrough){
        header.style.animation = "0.5s linear 0s normal forwards running fadein";
        mainContainer.style.animation = "0.5s linear 0s normal forwards running fadein";
        isSeeThrough = false;
    }else{
        header.style.animation = "0.5s linear 0s normal forwards running fadeout";
        mainContainer.style.animation = "0.5s linear 0s normal forwards running fadeout";
        isSeeThrough = true;
    }
}

function changePage(newPageID) {
    //Pass in the ID of the new subpage
    let newSubpage = document.getElementById(newPageID);
    for (let i = 0; i < document.getElementsByClassName("subpage").length; i++) {
        let subpage = document.getElementsByClassName("subpage")[i];
        //Find current active subpage
        if (subpage.classList.contains("active-subpage") && subpage.id != newSubpage.id) {
            console.log(`Going to ${newSubpage.id}`);
            //Play fade out animation for current subpage
            let randomOutIndex = getRandomIndex(outAnimations.length);
            console.log(`playing out animation ${outAnimations[randomOutIndex]}`);
            subpage.style.animation = `${outAnimationSpeeds[randomOutIndex]}s ease-in 0s 1 normal backwards running ${outAnimations[randomOutIndex]}`;
            //Add event listener for the end of subpage out animation
            subpage.addEventListener('animationend', () => {
                //Deactivate subpage and remove animation
                subpage.classList.remove("active-subpage");
                subpage.style.removeProperty("animation");
                //Activate new subpage
                newSubpage.classList.add("active-subpage");

                let randomInIndex = getRandomIndex(inAnimations.length);
                console.log(`playing in animation ${inAnimations[randomInIndex]}`);
                newSubpage.style.animation = `${inAnimationSpeeds[randomInIndex]}s linear 0s 1 normal forwards running ${inAnimations[randomInIndex]}`;
                newSubpage.addEventListener('animationend', () =>{
                    newSubpage.style.removeProperty("animation");
                }, { once: true }); 
            }, { once: true });
        }
    }
    
}