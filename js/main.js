//TOAST element 
function toastFunction() {

    let btnToast = document.getElementById('toast');

    btnToast.className = "show";

    // After 3 seconds, remove the show class from toast
    setTimeout(function () { btnToast.className = btnToast.className.replace("show", ""); }, 3000);
}

//Activate and Stop music using toggler switch

let music = new Audio('assets/lv1_taxasradiofish.mp3');
let isPlaying = false;

function playMusic() {
    isPlaying ? music.pause() : music.play();
};
music.onplaying = function () {
    isPlaying = true;
};
music.onpause = function () {
    isPlaying = false;
};
