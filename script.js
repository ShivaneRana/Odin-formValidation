const image = document.querySelector(".imagePanel");
const content = document.querySelector(".content");

//this apply random image to the sidebar
function randomImage(){
    const randomN = Math.floor((Math.random()*11)+1);
    image.style.backgroundImage = `url("./image/${randomN}.jpg")`;
    console.log(`Random image number ${randomN} has been applied`);
}
randomImage();
