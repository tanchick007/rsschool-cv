//Бургер-меню

const iconMenu = document.querySelector(".navigation__icon");
const menuBody = document.querySelector(".navigation__body");
if (iconMenu) {
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    menuBody.classList.toggle("navigation__body_active");
    iconMenu.classList.toggle("navigation__icon_active");
  });
}

const menuLinks = document.querySelectorAll(".navigation__link");
if (menuLinks.length > 0) {
  menuLinks.forEach((item) => {
    item.addEventListener("click", onMenuClick);
  });
}

function onMenuClick() {
  if (iconMenu.classList.contains("navigation__icon_active")) {
    document.body.classList.remove("_lock");
    menuBody.classList.remove("navigation__body_active");
    iconMenu.classList.remove("navigation__icon_active");
  }
}

//Замена стилей при изменении ширины экрана

const titleSkills = document.querySelector("h3[data-skills]"),
  titleHobbies = document.querySelector("h3[data-hobbies]"),
  titleLanguages = document.querySelector("h3[data-languages]");
const mediaQuery = window.matchMedia("(max-width: 769px)");

function changeClass(media) {
  if (media.matches) {
    titleSkills.classList.remove("title_purple");
    titleSkills.classList.add("title_pink");
    titleHobbies.classList.remove("title_pink");
    titleHobbies.classList.add("title_purple");
    titleLanguages.classList.remove("title_purple");
    titleLanguages.classList.add("title_pink");
  } else {
    titleSkills.classList.remove("title_pink");
    titleSkills.classList.add("title_purple");
    titleHobbies.classList.remove("title_purple");
    titleHobbies.classList.add("title_pink");
    titleLanguages.classList.remove("title_pink");
    titleLanguages.classList.add("title_purple");
  }
}

mediaQuery.addListener(changeClass);
changeClass(mediaQuery);
