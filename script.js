const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// LANGUAGE SWITCHER

const langES = document.getElementById("lang-es");
const langEN = document.getElementById("lang-en");

const translatableElements = document.querySelectorAll("[data-es][data-en]");

function changeLanguage(language) {

    translatableElements.forEach(element => {

        element.textContent = element.getAttribute(`data-${language}`);

    });

    document.documentElement.lang = language;

    if (language === "es") {

        langES.classList.add("active");
        langEN.classList.remove("active");

    } else {

        langEN.classList.add("active");
        langES.classList.remove("active");

    }

}

langES.addEventListener("click", () => {
    changeLanguage("es");
});

langEN.addEventListener("click", () => {
    changeLanguage("en");
});