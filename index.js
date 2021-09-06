let singBtn = document.querySelector("#btn");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let shoping = document.querySelector("#shoping");
let product = document.querySelector(".product");
let back = document.querySelector("#back");

back.addEventListener("click",()=>{
    product.style.display="none";
    about.style.display="flex";
})

shoping.addEventListener("click",()=>{
    product.style.display="flex";
    about.style.display="none";
});

singBtn.addEventListener("click", () => {
    
    let input = document.querySelector("#eml").value;
    let password = document.querySelector("#pas").value;
    
    if (input && password) {
        home.style.display="none";
        about.style.display="flex";
    }else{
        alert("inter your email or password !")
    }
});