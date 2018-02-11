var pageHeight = document.querySelector('.page');
pageHeight = window.getComputedStyle(pageHeight);
pageHeight = pageHeight.getPropertyValue('height');

document.querySelector('.main-editor').style.height = parseInt(pageHeight) - 80 + "px";
// задаю высоту редактору от высоты родителя, который отзывчив
