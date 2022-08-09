// Боковое меню
const hamburger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".mobile-block__navigation");
const BlockBody = document.querySelector("#BodyBlock");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    BlockBody.classList.toggle("active-block");
})

// Прелоадер
document.body.onload = () => {
    setTimeout(() => {
        var preloader = document.getElementById("PreLoader");
        if (!preloader.classList.add('done')) {
            preloader.classList.add('done');
        }
        var bodyBlock = document.getElementById("BodyBlock");
        if (!bodyBlock.classList.add('active-block')) {
            preloader.classList.add('active-block');
        }
    }, 1000);
}