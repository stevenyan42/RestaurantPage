import './style.css';
import loadHome from './home.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';

function clearContent() {
    document.querySelector("#content").innerHTML = "";
}

function navInit() {
    const homeButton = document.querySelector(".home-button");
    const menuButton = document.querySelector(".menu-button");
    const contactButton = document.querySelector(".contact-button");

    homeButton.addEventListener("click", () => {
        clearContent();
        loadHome();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        loadMenu();
    });

    contactButton.addEventListener("click", () => {
        clearContent();
        loadContact();
    });
}

function initWebpage() {
    navInit();
    loadHome();
}

initWebpage();

