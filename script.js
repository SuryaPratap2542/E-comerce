const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar){
    bar.addEventListener("click",() => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener("click",() => {
        nav.classList.remove('active');
    })
}
if (nav){
    window.addEventListener("scroll",()=>{
        nav.classList.remove("active")
    })
}
// Toggle Style Switcher
// const styleSwitcherToggle= document.querySelector("#bar");
// styleSwitcherToggle.addEventListener("click",()=>{
//     document.querySelector("#mobile").classList.toggle("open");
// })

// hide style Switcher on scroll
// window.addEventListener("scroll",()=>{
//     console.log("scrolled");
//     if (document.querySelector(".mob").classList.contains("active"))
//     {
//         document.querySelector(".mob").classList.remove("open");
//     }
// })