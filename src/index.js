import foodTemplate from './templates/foodTemplate.hbs';
import menu from './menu.json';
import css from "./css/style.css";
import theme from './theme.js';

const html = foodTemplate(menu);
const ulRef = document.querySelector('.js-menu');
ulRef.insertAdjacentHTML('beforeend', html);