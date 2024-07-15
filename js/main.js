var arrayOfAllImages = Array.from(document.querySelectorAll('section .container figure img'))
var clickedImage = document.querySelectorAll('section .container figure img');
var layer = document.querySelector(".mylayer")
var layerImage = document.querySelector(".mylayer figure img")
var indexOfClickedImage;
var nextArrow = document.querySelector('.fa-chevron-right');
var prevArrow = document.querySelector('.fa-chevron-left');
var exitmark = document.querySelector('.fa-xmark');




for (let i = 0; i < arrayOfAllImages.length; i++) {
    arrayOfAllImages[i].addEventListener("click", function (e) {
        layer.classList.remove("d-none");
        layerImage.src = this.src;
        indexOfClickedImage = i;
    })
}
nextArrow.addEventListener("click", nextImage)
prevArrow.addEventListener("click",prevImage)
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

document.addEventListener("keydown",function(e){
    console.log(e);
    if (e.key=='ArrowRight') {
        nextImage();
    }
    if (e.key=='ArrowLeft') {
        prevImage();
    }
    if (e.key=='Escape') {
        exitlayer();
    }
})
layer.addEventListener('click',function(e){
    console.log(e);
    if (e.target==layer) {
        exitlayer();
    }
})
