
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");


// Mobile menu
menu?.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach((link) => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});

