//Toast element 
function toastFunction() {

    let btnToast = document.getElementById('toast');

    btnToast.className = "show";

    // After 3 seconds, remove the show class from toast
    setTimeout(function () { btnToast.className = btnToast.className.replace("show", ""); }, 3000);
}