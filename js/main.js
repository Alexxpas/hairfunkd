
// ------------Hamburger icon toggle------------1

const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerMenu = document.getElementById('hamburgerMenu');


const toggleHamburger = () => {
    if (hamburgerMenu.style.transform === "translateY(0px)") {
        hamburgerMenu.style.opacity = 0.5;
        hamburgerMenu.style.transform = "translateY(-1000px)";
    } else {
        hamburgerMenu.style.opacity = 1;
        hamburgerMenu.style.transform = "translateY(0px)";

    }
}

hamburgerIcon.addEventListener("click", toggleHamburger);


// ------------Nav links toggle------------1.1
const hamburgerLink = document.getElementById('hamburgerLink');
const hamburgerButton = document.getElementById('hamburgerButton');

const closeHamburger = () => {
    hamburgerMenu.style.opacity = 0.5;
    hamburgerMenu.style.transform = "translateY(-1000px)";

    hamburgerButton.classList.toggle('opened'); hamburgerButton.setAttribute('aria-expanded', hamburgerButton.classList.contains('opened'))

}

hamburgerLink.addEventListener("click", closeHamburger);
hamburgerLink1.addEventListener("click", closeHamburger);
hamburgerLink2.addEventListener("click", closeHamburger);
hamburgerLink3.addEventListener("click", closeHamburger);
// hamburgerLink4.addEventListener("click", closeHamburger);


// ------------Scroll to top------------ 2

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}