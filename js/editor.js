// задаю высоту редактору от высоты родителя, который отзывчив
var pageHeight = document.querySelector('.page');
pageHeight = window.getComputedStyle(pageHeight);
pageHeight = pageHeight.getPropertyValue('height');

document.querySelector('.main-editor').style.height = parseInt(pageHeight) - 80 + "px";

// показываю текущую дату
var now = new Date();
var currentDay = now.getDate();
var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.',
              'Sep.', 'Oct', 'Nov', 'Dec'];
var currentMonth = months[now.getMonth()];
var currentYear = now.getFullYear();
var currentDate = currentMonth + " " + currentDay + " " + currentYear;

document.querySelector('#current-time').append(currentDate);

// заголовок редактора и обработчик событий
var headerArticle = document.querySelector('#header-article');
var counter = 25;

document.addEventListener('click', () => {
  if (document.activeElement === headerArticle) {
    headerArticle.removeAttribute('placeholder');
  } else if (!headerArticle.hasAttribute('placeholder')) {
    headerArticle.setAttribute('placeholder', 'Заголовок');
  }

});

function keyListener(){

  if (headerArticle.value.length >= counter) {
    var headerFontSize = window.getComputedStyle(headerArticle).getPropertyValue('font-size');
    headerArticle.style.fontSize = parseInt(headerFontSize) / 2 + "px";
    counter += counter;
  } else if (headerArticle.value.length === 0) {
    headerArticle.style.fontSize = 4 + "rem";
    counter /= 2;
  }

}
