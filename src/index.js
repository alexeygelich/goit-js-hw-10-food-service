import foodTemplate from './templates/foodTemplate.hbs';
import menu from './menu.json';
import css from "./css/style.css";

const html = foodTemplate(menu);
const ulRef = document.querySelector('.js-menu');
ulRef.insertAdjacentHTML('beforeend', html);
const inputRef = document.querySelector('.theme-switch__toggle');

const onChoice = function () { 
if (localStorage.getItem("theme") === "light-theme" || !(localStorage.getItem("theme"))){
  document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');  
};

if (localStorage.getItem("theme") === "dark-theme") { 
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    inputRef.checked = true;
};
}

onChoice();

inputRef.addEventListener('input', e => {
    e.target.checked ? localStorage.setItem("theme", "dark-theme") : localStorage.setItem("theme", "light-theme");
    onChoice();
});