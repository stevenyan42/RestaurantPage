import pizza from "./bigPizza.jpeg";
import burger from "./bigBurger.jpg";
import beer from "./bigBeer.jpeg";

function loadMenu() {
    const content = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "The Grub";
    const menuSubTitle = document.createElement("h2");
    menuSubTitle.textContent = "All of Our Grub is Made Fresh Daily In-House";
    menu.appendChild(menuTitle);
    menu.appendChild(menuSubTitle);

    menu.appendChild(createMenuList());
    content.appendChild(menu);
}

const menuItems = [
    {
        item: "Big Pizza",
        desc: "The Biggest, Freshest Pizza Straight From the Big Stove!",
        price: "$12.99",
        src: pizza,
        alt: "a comically large pizza",
    },
    {
        item: "Big Burger",
        desc: "The Biggest, Freshest Burger Straight From the Big Grill!",
        price: "$8.99",
        src: burger,
        alt: "a comically large burger",
    },
    {
        item: "Big Beer",
        desc: "The Biggest, Freshest Beer Straight From the Big Tap!",
        price: "$2.99",
        src: beer,
        alt: "a comically large beer",
    },
];

function createMenuList() {
    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");

    menuItems.forEach(item => {
        menuList.appendChild(createMenuItem(item.item, item.desc, item.price, item.src, item.alt));
    })

    return menuList;
}

function createMenuItem(item, desc, price, src, alt) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const menuItemTitle = document.createElement("h3");
    menuItemTitle.textContent = item;
    const menuItemDesc = document.createElement("p");
    menuItemDesc.textContent = desc;
    const menuItemImgCont = document.createElement("div");
    menuItemImgCont.classList.add("img-cont");
    const menuItemImg = document.createElement("img");
    menuItemImg.src = src;
    menuItemImg.alt = alt;
    menuItemImgCont.appendChild(menuItemImg);

    const menuItemPrice = document.createElement("h3");
    menuItemPrice.textContent = price;

    menuItem.appendChild(menuItemTitle);
    menuItem.appendChild(menuItemDesc);
    menuItem.appendChild(menuItemImgCont);
    menuItem.appendChild(menuItemPrice);

    return menuItem;
}

export default loadMenu;