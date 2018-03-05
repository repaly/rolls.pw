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

function keyListener() {

  if (headerArticle.value.length >= counter) {
    var headerFontSize = window.getComputedStyle(headerArticle).getPropertyValue('font-size');
    headerArticle.style.fontSize = parseInt(headerFontSize) / 2 + "px";
    counter += counter;
  } else if (headerArticle.value.length === 0) {
    headerArticle.style.fontSize = 4 + "rem";
    counter /= 2;
  }

}

// добавляю quill редактор к первому текст боксу

new Quill('.quill', {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
    ]
  },
  placeholder: 'Пиши, сокращай..',
  theme: 'bubble'
});

// функция вызова меню боксов

var buttonAdd = document.querySelector('#button-add');
var menu = document.querySelector('.dropdown-menu-container');
var menuIsDisplayed = false;

function toogleMenu() {

  if (menuIsDisplayed) {
    menu.style.display = "none";
    menuIsDisplayed = false;
  } else if (!menuIsDisplayed) {
     menu.style.display = "inline";
     menuIsDisplayed = true;
  }

}

// кнопочки боксов

var headerButton = document.querySelector('#header-button');
var paragraphButton = document.querySelector('#paragraph-button');
var layoutButton = document.querySelector('#layout-button');
var linkButton = document.querySelector('#link-button'); 
var listBox = document.querySelector('.list-box');




document.addEventListener('click', (event) => {

  if (event.target === headerButton) {

    listBox.appendChild(headerBox());

  } else if (event.target === paragraphButton) {

    listBox.appendChild(textBox());

  } else if (event.target === layoutButton) {
    console.log("layoutButton");
  } else if (event.target === linkButton) {
    console.log("linkButton");
  }

  if (menuIsDisplayed) {
    toogleMenu();
  } else if (event.target === buttonAdd) {
    toogleMenu();
  }

});

// функции добавления боксов

function headerBox() {
  var newListItemElement = document.createElement("li");
  newListItemElement.className = "header-icon list-item";
  newListItemElement.innerHTML = '<div class="content-box">' +
  '<input class="header-title" type="text" placeholder="Заголовочек">' +
  '</div>';
  return newListItemElement;
}

function textBox() {
  var newListItemElement = document.createElement("li");
  newListItemElement.className = "text-icon list-item";

  var newContentBoxElement = document.createElement("div");'<div class="content-box"></div>';
  newContentBoxElement.className = "content-box";
  newListItemElement.appendChild(newContentBoxElement);

  var newQuilElement = document.createElement("div");
  newQuilElement.className = "text-box";
  newContentBoxElement.appendChild(newQuilElement);

  new Quill(newQuilElement, {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
      ]
    },
    placeholder: 'Пиши, сокращай..',
    theme: 'bubble'
  });

  return newListItemElement;
}
