'use strict';
(function() {

  window.addEventListener('load', init);
  let currentPageNumber = -1;
  let book = 'unemployment2';
  let numPages = 22;
  let pages;
  let allTitles = ['unemployment2','unemployment', 'blood-sweat', 'growth', 'sep-oct22', 'book-of-love', 'book-of-love-2']
  let thumbs;

  function init() {
    document.querySelector('.thumbnail').classList.add('hidden');
    pages = document.querySelectorAll('.page');
    let arrows = document.querySelectorAll('.arrow');
    arrows[0].addEventListener('click', prevPage);
    pages[0].addEventListener('click', prevPage);
    arrows[1].addEventListener('click', nextPage);
    pages[1].addEventListener('click', nextPage);

    thumbs = document.querySelectorAll('.thumbnail');
    thumbs[0].addEventListener('click', function() {openBook('yadda', 16)});
    thumbs[0].addEventListener('click', function() {openBook('unemployment2', 22)});
    thumbs[1].addEventListener('click', function() {openBook('unemployment', 34)});
    thumbs[2].addEventListener('click', function() {openBook('blood-sweat', 38)});
    thumbs[3].addEventListener('click', function() {openBook('growth', 12)});
    thumbs[4].addEventListener('click', function() {openBook('sep-oct22', 40)});
    thumbs[5].addEventListener('click', function() {openBook('book-of-love', 16)});
    thumbs[6].addEventListener('click', function() {openBook('book-of-love-2', 12)});
  }

  function prevPage(){
    if (currentPageNumber > -1) {
        currentPageNumber -= 2;
        pages[0].src = "img/" + book + "/" + currentPageNumber + ".jpg";
        pages[1].src = "img/" + book + "/" + (currentPageNumber + 1) + ".jpg";
    } else {
        currentPageNumber = (numPages - 1);
        pages[0].src = "img/" + book + "/" + (numPages - 1) + ".jpg";
        pages[1].src = "img/" + book + "/" + (numPages) + ".jpg";
    }
  }

  function nextPage(){
    if (currentPageNumber < (numPages - 1)) {
        currentPageNumber += 2;
        pages[0].src = "img/" + book + "/" + currentPageNumber + ".jpg";
        pages[1].src = "img/" + book + "/" + (currentPageNumber + 1) + ".jpg";
    } else {
        currentPageNumber = -1;
        pages[0].src = "img/" + book + "/-1.jpg";
        pages[1].src = "img/" + book + "/0.jpg";
    }
  }

  function openBook(title, pageCount){
    let prevThumb = document.querySelector('.hidden');
    prevThumb.classList.remove('hidden');
    thumbs[allTitles.indexOf(title)].classList.add('hidden');

    book = title;
    currentPageNumber = 1; 
    pages[0].src = "img/" + title + "/1.jpg";
    pages[1].src = "img/" + title + "/2.jpg";

    document.querySelector('.bookview').id = title;
    numPages = pageCount;
    scroll(0,180);
  }
})();
