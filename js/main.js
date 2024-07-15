 const arrayOfAllImages = Array.from(document.querySelectorAll('section .container figure img'));
 const layer = document.querySelector(".mylayer");
 const layerImage = document.querySelector(".mylayer figure img");
 const nextArrow = document.querySelector('.fa-chevron-right');
 const prevArrow = document.querySelector('.fa-chevron-left');
 const exitmark = document.querySelector('.fa-xmark');
 let indexOfClickedImage;




for (let i = 0; i < arrayOfAllImages.length; i++) {
    arrayOfAllImages[i].addEventListener("click", function (e) {
        layer.classList.remove("d-none");
        layerImage.src = this.src;
        indexOfClickedImage = i;
    })
}
nextArrow.addEventListener("click", nextImage);
prevArrow.addEventListener("click",prevImage);
exitmark.addEventListener("click",exitlayer)


function nextImage() {
    indexOfClickedImage++;
    if (indexOfClickedImage == arrayOfAllImages.length) {
        indexOfClickedImage = 0;
    }
    layerImage.src = arrayOfAllImages[indexOfClickedImage].src;
}
function prevImage() {
    indexOfClickedImage--;
    if (indexOfClickedImage == -1) {
        indexOfClickedImage = arrayOfAllImages.length-1;
    }
    layerImage.src = arrayOfAllImages[indexOfClickedImage].src;
}
function exitlayer(){
    layer.classList.add("d-none");
}

document.addEventListener("keydown", (e) => {
        if (layer.classList.contains("d-none")) return;
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') exitlayer();
    });
 layer.addEventListener('click', (e) => {
        if (e.target === layer) exitlayer();
    });

