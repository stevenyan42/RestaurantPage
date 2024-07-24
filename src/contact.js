function loadContact() {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.classList.add("contact");
    contact.innerHTML =
    `<h1>Contact Us</h3>
    <h3>604 123 4567</p>
    <h3>bigstove@biggrub.com</p>`;

    content.appendChild(contact);
}

export default loadContact;