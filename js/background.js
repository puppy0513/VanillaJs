const body = document.querySelector("body");

const images =["image1.jpg","image2.jpg","image3.jpg"];

const IMG_NUMBER = images.length;

//image를 랜덤으로 선택하게 된다. 
function genRandom() {
    const number = Math.floor(Math.random() *IMG_NUMBER);
    return number;
}
// const chosenImages = images[Math.floor(Math.random() * images.length)];         

function init() {
    const randomNumber = genRandom();
    return number;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `img/image${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}


function init(){
    Random = genRandom();
    paintImage(Random);
}

init();

//const bgImage = document.createElement("");

//bgImage.src = `img/${chosenImages}`;

//console.log(bgImage.src);

//document.body.appendChild(bgImage);