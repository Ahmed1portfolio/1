// Navbar
var btn1 = document.querySelector(".right-nav-links");
var btn2 = document.querySelector("ul.right-nav");

btn1.onclick = function() {
    btn2.classList.toggle("rs-d-block");
}