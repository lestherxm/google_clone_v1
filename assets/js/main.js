/* Google Logo changer based on with screen - start */
window.addEventListener('resize', ()=>{
    changeImgBasedOnWidth();
})

function changeImgBasedOnWidth() {
    let googleLogo = document.querySelector('#google-logo');
    let container = document.querySelector('#main-container');
    let src;

    if(container.clientWidth >= 769){
        src = './assets/img/googlelogo_color_272x92dp.png';
    }else{
        src = './assets/img/googlelogo_color_160x56dp.png';
    }

    if(googleLogo.src.endsWith(src)){
        return; // Evita cambiar la imagen si ya tiene el src correcto
    }

    googleLogo.src = src;
}
/* Google Logo changer based on with screen - end */

/* From "All" to "Gmail Option handler - start */
window.addEventListener('resize', function () {
    toggleResponsiveContent();
});

function toggleResponsiveContent(){
    let screenWidth = window.innerWidth;
    let allLink = document.querySelector('#allLink');
    if (screenWidth >= 1024) {
        allLink.textContent = 'Gmail';
        allLink.classList.remove('active');
    } else {
        allLink.textContent = 'All';
    }
}
toggleResponsiveContent();
/* From "All" to "Gmail Option handler - end */