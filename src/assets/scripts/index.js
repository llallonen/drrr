// Polyfills
import 'babel-polyfill';

// Styles
import '../styles/index.scss';

// App
import './app';

// Burger
import '../styles/index.scss';

const burger = document.querySelector("#burger");
const mobileNav = document.querySelector("#mobile-nav");

burger.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
    burger.classList.toggle("is-open");

});

const mobileNavContainer = document.querySelector('.mobile-nav-main');

mobileNavContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('toggle-mobile-nav-dropdown')) return;

    const { target } = e;
    console.log(target);

    target.classList.toggle('open')
})