const message = (mg)=> {
    console.log(mg);
}
message('Итак, пройдемся по каждому пункту:');
message('1. Верстка валидная: +10✅');
message('2. Верстка семантическая: +20✅(присутствуют такие теги, как header, footer, main, section, aside, nav, h1, h3, h5, h6)');
message('3. Для оформления СV используются css-стили: +10✅');
message('4. Контент размещается в блоке, который горизонтально центрируется на странице: +10✅');
message('5. Вёрстка адаптивная: +10✅');
message('6. Есть адаптивное бургер-меню: +10✅');
message('7. На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым): +10✅');
message('8. Контакты для связи и перечень навыков оформлены в виде списка ul > li: +10✅');
message('9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского: +10✅');
message('10. СV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода: +10✅');
message('11. CV содержит изображения-ссылки на выполненные вами проекты: +10✅');
message('12. CV выполнено на английском языке: +10✅');
message('13. Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка: +10✅');
message('14. Есть видеорезюме автора CV на английском языке: +0❌');
message('15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV: +10✅(ну по крайней мере я считаю, что получилось очень даже неплохо:))');
message('Итого: 150/150(max 160)');
message('Спасибо за уделенное время!🧡');

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