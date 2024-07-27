const image = document.querySelector(".imagePanel");
const content = document.querySelector(".content");
const reset = document.querySelector(".reset");
const password0 = document.querySelector("#password0");
const password1 = document.querySelector("#password1");
const cpasswordMismatch = document.querySelector(".confirmPasswordError")
const passwordMismatch = document.querySelector(".passwordError");
const submit = document.querySelector(".submit");
const year = document.querySelector(".year");

let date = new Date();
year.textContent = date.getFullYear(); 

//this apply random image to the sidebar
function randomImage(){
    const randomN = Math.floor((Math.random()*11)+1);
    image.style.backgroundImage = `url("./image/${randomN}.jpg")`;
    console.log(`Random image number ${randomN} has been applied`);
}
randomImage();

//this reset the input field and also reload the entire webpage
reset.onclick = function(){
    location.reload();
}


//keyboard support
document.addEventListener("keydown",function(event){
    let target = event.key;
    if(target === "Enter"){
        submit.click();
    }else if(target === "Escape"){
        reset.click();
    }
    console.log(target);
})
