// document.getElementsByClassName("opacity-button").addEventListener("click", toggleOpacity);

const opacityButton = document.getElementsByClassName("opacity-button")[0];
opacityButton.addEventListener("click", toggleOpacity);
document.getElementsByClassName("page")[0].style.opacity = 1;

function toggleOpacity(){
    const page = document.getElementsByClassName("page")[0];
    console.log(page.style.opacity);
    if(page.style.opacity <= 0.5){
        page.style.opacity = 1;
    }else{
        page.style.opacity = 0.25;
    }
}