'use strict';
(function() {

  window.addEventListener('load', init);
  let currentPageNumber = -1;
  let book = 'gl4';
  let numPages = 54;
  let pages;
  let allTitles = ['gl4','gl3','gl2','fairon','gl-anthology'];
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
    thumbs[0].addEventListener('click', function() {openBook('gl4', 54)});
    thumbs[1].addEventListener('click', function() {openBook('gl3', 48)});
    thumbs[2].addEventListener('click', function() {openBook('gl2', 34)});
    thumbs[3].addEventListener('click', function() {openBook('fairon', 18)});
    thumbs[4].addEventListener('click', function() {openBook('gl-anthology', 46)});  
  }

  function prevPage(){
    if (currentPageNumber > -1) {
        currentPageNumber -= 2;
        pages[0].src = "gorgeous-files/" + book + "/" + currentPageNumber + ".png";
        pages[1].src = "gorgeous-files/" + book + "/" + (currentPageNumber + 1) + ".png";

    } else {
        currentPageNumber = (numPages - 1);
        pages[0].src = "gorgeous-files/" + book + "/" + (numPages - 1) + ".png";
        pages[1].src = "gorgeous-files/" + book + "/" + (numPages) + ".png";

    }
  }

  function nextPage(){
    if (currentPageNumber < (numPages - 1)) {
        currentPageNumber += 2;
        pages[0].src = "gorgeous-files/" + book + "/" + currentPageNumber + ".png";
        pages[1].src = "gorgeous-files/" + book + "/" + (currentPageNumber + 1) + ".png";
     
    } else {
        currentPageNumber = -1;
        pages[0].src = "gorgeous-files/" + book + "/-1.png";
        pages[1].src = "gorgeous-files/" + book + "/0.png";

    }
  }

  function openBook(title, pageCount){
    let prevThumb = document.querySelector('.hidden');
    prevThumb.classList.remove('hidden');
    console.log(title);
    console.log(thumbs);
    console.log(allTitles);
    thumbs[allTitles.indexOf(title)].classList.add('hidden');

    book = title;
    currentPageNumber = -1; 
    pages[0].src = "gorgeous-files/" + title + "/1.png";
    pages[1].src = "gorgeous-files/" + title + "/2.png";


    document.querySelector('.bookview').id = title;
    numPages = pageCount;
    scroll(0,180);
  }
})();

