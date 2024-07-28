const image = document.querySelector(".imagePanel");
const content = document.querySelector(".contentPanel");
const reset = document.querySelector(".reset");
const password0 = document.querySelector("#password0");
const password1 = document.querySelector("#password1");
const cpasswordMismatch = document.querySelector(".confirmPasswordError")
const passwordMismatch = document.querySelector(".passwordError");
const submit = document.querySelector(".submit");
const year = document.querySelector(".year");

//keeps the year upto date.
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
})


let psd0;
let psd1;

//this is to check if password matches
password0.addEventListener("input",function(){
    psd0 = password0.value;
    console.log(psd0);
    if(psd0 !== psd1){
        passwordMismatch.textContent = "Password Mismatch";
        passwordMismatch.style.color = "red";
        passwordMismatch.style.opacity = "1";
        cpasswordMismatch.textContent = "Password Mismatch";
        cpasswordMismatch.style.color = "red";
        cpasswordMismatch.style.opacity = "1";
    }else if(psd0 === psd1){
        passwordMismatch.textContent = "Password Matches";
        passwordMismatch.style.color = "green";
        passwordMismatch.style.opacity = "1";
        cpasswordMismatch.textContent = "Password Matches";
        cpasswordMismatch.style.color = "green";
        cpasswordMismatch.style.opacity = "1";
    }else{
        passwordMismatch.style.opacity = "0";
    }
})

//this checks if confirm password matches
password1.addEventListener("input",function(){
    psd1 = password1.value;
    console.log(psd1);
    if(psd0 !== psd1){
        cpasswordMismatch.textContent = "Password Mismatch";
        cpasswordMismatch.style.color = "red";
        cpasswordMismatch.style.opacity = "1";
        passwordMismatch.textContent = "Password Mismatch";
        passwordMismatch.style.color = "red";
        passwordMismatch.style.opacity = "1";

    }else if(psd0 === psd1){
        cpasswordMismatch.textContent = "Password Matches";
        cpasswordMismatch.style.color = "green";
        cpasswordMismatch.style.opacity = "1";
        passwordMismatch.textContent = "Password Matches";
        passwordMismatch.style.color = "green";
        passwordMismatch.style.opacity = "1";
    }else{
        cpasswordMismatch.style.opacity = "0";
    }
})

//this fucntion return true if password === confrim password
function passwordEqualsConfirmPassword(){
    let psd0 = password0.value;
    let psd1 = password1.value;
    if(psd0 !== psd1){
        return false;
    }else{
        return true;
    }
}

//this makes it impossible to submit if passwords do not match
submit.addEventListener("click",function(){
    if(passwordEqualsConfirmPassword() === false){
        submit.disabled = true;
    }
})