
const opacityButton = document.getElementsByClassName("opacity-button")[0];

const homeButton = document.getElementsByClassName("home-button");
const homeSubpage = document.getElementById("home-subpage");

const experienceButton = document.getElementsByClassName("experience-button");
const resumeSubpage = document.getElementById("resume-subpage");

const header = document.getElementsByClassName("header-content")[0];
const mainContainer = document.getElementsByClassName("main-container")[0];
let isSeeThrough = false;

opacityButton.addEventListener("click", toggleOpacity);
homeButton[0].addEventListener("click", () => { changePage("home-subpage") });
homeButton[1].addEventListener("click", () => { changePage("home-subpage") });
experienceButton[0].addEventListener("click", () => {changePage("resume-subpage")});
experienceButton[1].addEventListener("click", () => {changePage("resume-subpage")});

const inAnimationSpeed = 0.5;
const outAnimationSpeed = 0.5;

const inAnimations = ["yRotateIn","xRotateIn", "slideInLeft"];
const outAnimations = ["yRotateOut", "xRotateOut", "slide-out-left"];

function getRandomIndex(maxIndex){
    return Math.floor(Math.random() * maxIndex);
}

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
            subpage.style.animation = `${outAnimationSpeed}s linear 0s 1 normal backwards running ${outAnimations[randomOutIndex]}`;
            //Add event listener for the end of subpage out animation
            subpage.addEventListener('animationend', () => {
                //Deactivate subpage and remove animation
                subpage.classList.remove("active-subpage");
                subpage.style.removeProperty("animation");
                //Activate new subpage
                newSubpage.classList.add("active-subpage");

                let randomInIndex = getRandomIndex(inAnimations.length);
                console.log(`playing in animation ${inAnimations[randomInIndex]}`);
                newSubpage.style.animation = `${inAnimationSpeed}s linear 0s 1 normal forwards running ${inAnimations[randomInIndex]}`;
                newSubpage.addEventListener('animationend', () =>{
                    newSubpage.style.removeProperty("animation");
                }, { once: true }); 
            }, { once: true });
        }
    }
    
}