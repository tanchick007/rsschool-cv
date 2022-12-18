const message = (mg)=> {
    console.log(mg);
}
message('Итак, пройдемся по каждому пункту:');
message('1. Засабмитила ссылку в rsapp на своё CV: +10');
message('2. Вёрстка валидная: +10');
message('3. Вёрстка семантическая(присутствуют такие теги, как header, footer, main, section, nav, h1, h2): +20');
message('4. В footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс: +10');
message('5. Для оформления СV используются css-стили: +10');
message('6. При уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону: +10');
message('7. На странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt: +10');
message('8. Навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a: +10');
message('9. Содержание CV: +30');
message('10. CV выполнено на английском языке: +10');

//Бургер-меню

const iconMenu = document.querySelector('.navigation__icon');
const menuBody = document.querySelector('.navigation__body');
if(iconMenu){
    iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('navigation__body_active');
        iconMenu.classList.toggle('navigation__icon_active');
    })
}

const menuLinks = document.querySelectorAll('.navigation__link');
if(menuLinks.length > 0){
    menuLinks.forEach((item) => {
        item.addEventListener('click', onMenuClick)
    })
}

function onMenuClick(e){
    const target = e.target;
    if(iconMenu.classList.contains('navigation__icon_active')){
        document.body.classList.remove('_lock');
        menuBody.classList.remove('navigation__body_active');
        iconMenu.classList.remove('navigation__icon_active');
    }
}

//Замена стилей при изменении ширины экрана

const titleSkills = document.querySelector('h3[data-skills]'),
      titleHobbies = document.querySelector('h3[data-hobbies]'),
      titleLanguages = document.querySelector('h3[data-languages]');
const mediaQuery = window.matchMedia('(max-width: 769px)');

function changeClass(media) {
    if(media.matches){
        titleSkills.classList.remove('title_purple');
        titleSkills.classList.add('title_pink');
        titleHobbies.classList.remove('title_pink');
        titleHobbies.classList.add('title_purple');
        titleLanguages.classList.remove('title_purple');
        titleLanguages.classList.add('title_pink');
    } else {
        titleSkills.classList.remove('title_pink');
        titleSkills.classList.add('title_purple');
        titleHobbies.classList.remove('title_purple');
        titleHobbies.classList.add('title_pink');
        titleLanguages.classList.remove('title_pink');
        titleLanguages.classList.add('title_purple');
    }
}

mediaQuery.addListener(changeClass);
changeClass(mediaQuery);