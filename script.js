let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function(){
    navlist.classList.toggle("active");
})
window.onscroll =()=>{
    navlist.classList.remove("active")
};



var typed = new Typed(".input",{
    strings:["Fullstack Developer.","Designer.","Freelancer."],
    typeSpeed:70,
    backSpeed:60,
    loop:true
})