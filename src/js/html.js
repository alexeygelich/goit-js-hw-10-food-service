import foodTemplate from '../templates/foodTemplate.hbs';
import menu from '../DataBase/menu.json';

const html = foodTemplate(menu);
const ulRef = document.querySelector('.js-menu');
ulRef.insertAdjacentHTML('beforeend', html);