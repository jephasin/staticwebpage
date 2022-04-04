let root = document.querySelector(':root');
let headerBtn = document.querySelector(".toggle-collapse");
let collapseBtn = document.querySelector(".nav-collapse");
let nav = document.querySelector(".header");
let navBar = document.getElementById("nav");
let H1 = document.querySelector(".h1");

console.log('I love javascript');
headerBtn.addEventListener('click', function () {
    let navAttribute = collapseBtn.hasAttribute("id");
    if (navAttribute) {
        collapseBtn.removeAttribute("id", "nav");
        H1.removeAttribute("id", "delete");
    } else {
        collapseBtn.setAttribute('id', 'nav');  
        H1.setAttribute("id", "delete"); 
    }
})