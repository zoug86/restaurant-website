
const icons = document.querySelectorAll(".section-1-icons i");
const menu = document.querySelector(".menu");

let counter = 1;

setInterval(() => {

    const icon = document.querySelector(".section-1-icons .change");
    icon.classList.remove('change');
    counter++;
    if (counter > icons.length) {
        counter = 1
        icons[0].classList.add('change');
    } else {
        icon.nextElementSibling.classList.add("change");
    }

}, 3000);

menu.addEventListener("click", () => {
    target = document.querySelectorAll(".target");
    target.forEach((element) => {
        element.classList.toggle("change");
    });
});