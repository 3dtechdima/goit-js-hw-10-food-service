//импорт файла стилей
import './sass/main.scss';
//импорт файла масива данных карточек
import data from './menu.json';
//импорт файла HTML шаблонов карточек
import cards from './templates/cards.hbs';
// назначаем переменную (достаем из масива даныые одной карточки)
const menuRef = document.querySelector('.js-menu');
// функция сборки карточек в виде HTML- кода
const markup = cards(data);
// функция записи сформированого HTML- кода в index.html
menuRef.innerHTML = markup;
// назначаем переменную со списком тем
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// назначаем переменную (обращаемся к body)
const bodyColor = document.querySelector('body');
// назначаем переменную (обращаемся к переключателю тем)
const themeBtn = document.querySelector('#theme-switch-toggle');
//вешаем слушатель на переключатель
themeBtn.addEventListener('change', themeChanger);
//функция переключения темы
function themeChanger(e) {
  // переменная (если кнопка вкл.)(то темная тема)(если нет- светлая)
  const themeColor = e.target.checked ? theme.DARK : theme.LIGHT;
  //
  setData(themeColor);
  setBodyColor(themeColor);
}
//функция записи темы глобального объекта
function setData(data) {
  localStorage.setItem('theme', data);
}
//функция записи класса темы глобального объекта
function setBodyColor(classColor) {
  bodyColor.className = classColor;
}
//функция изменения темы чек-бокса
function start() {
  //задаем переменную темы
  const fistData = localStorage.getItem('theme') || theme.LIGHT;
  //запись темы чек-бокса глобального обьекта
  setBodyColor(fistData);
  //условие включения темной темы чек-бокса
  themeBtn.checked = fistData === theme.DARK;
}
//вызов функции
start();
