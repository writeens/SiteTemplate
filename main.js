/* eslint-disable prefer-const */
let navbarToggle = document.querySelector("#js-toggle");
let menu = document.querySelector("#js-menu");
let items = document.querySelectorAll(".flex-item");
items.forEach(item => item.addEventListener("click", updateFlex));
items.forEach(item => item.addEventListener("transitionend", updateText));
function updateText(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open");
        this.classList.toggle("black");
        items.forEach((item) => {
            if (item !== this) {
                item.classList.remove("black");
                item.classList.toggle("opaque");
            }
        });
    }
}
function updateFlex() {
    this.classList.toggle("flex-open");
}

// Handle the toggle menu;
navbarToggle.addEventListener("click", showMenu);
function showMenu() {
    console.log("object");
    menu.classList.toggle("active");
}
