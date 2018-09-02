const mobileBtn = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector('.mobile-navigation');

function toggleMenu() {
    this.classList.toggle('change');
    mobileMenu.classList.toggle('mobile-navigation--open');
}

mobileBtn.addEventListener('click', toggleMenu);