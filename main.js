/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
let navbarToggle = document.querySelector("#js-toggle");
let menu = document.querySelector("#js-menu");
let items = document.querySelectorAll(".flex-item");
let layer4 = document.querySelector(".layer4 > div");
let layer3 = document.querySelectorAll(".layer3-col");
let layer2 = document.querySelectorAll(".layer2-col");
let layer1 = document.querySelectorAll(".layer1-card");
items.forEach(item => item.addEventListener("click", updateFlex));
items.forEach(item => item.addEventListener("transitionend", updateText));
function updateText(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open");
        this.classList.toggle("white");
    }
}
function updateFlex() {
    this.classList.toggle("flex-open");
}

// Handle the toggle menu;
navbarToggle.addEventListener("click", showMenu);
function showMenu() {
    menu.classList.toggle("active");
}
// to monitor complete scroll into view
function isScrolledIntoViewComplete(elem) {
    let rect = elem.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    // for complete visibility
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}
// to monitor partial scroll into view
function isScrolledIntoViewPartial(elem) {
    let rect = elem.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    // for partial visibility
    let isVisible = (elemTop < window.innerHeight) && elemBottom >= 0;
    return isVisible;
}
window.addEventListener("scroll", animate);
function animate() {
    layer1.forEach((item) => {
        isScrolledIntoViewComplete(item) ? item.classList.add("shake") : item.classList.remove("shake");
    });
    layer2.forEach((item) => {
        isScrolledIntoViewComplete(item) ? item.classList.add("fadeInRight") : item.classList.remove("fadeInRight");
    });
    layer3.forEach((item) => {
        isScrolledIntoViewComplete(item) ? item.classList.add("fadeInLeft") : item.classList.remove("fadeInLeft");
    });
    isScrolledIntoViewPartial(layer4) ? layer4.classList.add("slideInRight") : layer4.classList.remove("slideInRight");
}
