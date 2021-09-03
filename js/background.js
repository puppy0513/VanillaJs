const images =["image1.jpg","image2.jpg","image3.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];          // image를 random으로 선택

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);