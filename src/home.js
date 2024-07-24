
function loadHome() {
    const content = document.querySelector("#content");
    const home = document.createElement("div");
    home.classList.add("home");

    home.innerHTML = 
    `<h1>Welcome to Big Stove's Big Grub</h1>
    <h2>Home of the Hottest, and Freshest Eats in the Lower Mainland</h2>
    <button class="menu-button">View Menu</button>
    <div class="hours">
        <h3>Hours of Operation</h3>
        <div class="hours-table">
            <div class="mon-sat">
                <p>Mon-Sat:</p>
                <p>10am-11pm</p>
            </div>
            <div class="sun">
                <p>Sun:</p>
                <p class="italic">Closed</p>
            </div>
        </div>
    </div>
    <div class="location">
        <h3>Location:</h3>
        <p>2054 Oak St<br>
        Vancouver, BC V9R 9G3</p>
    </div>`;

    content.appendChild(home);
}

export default loadHome;