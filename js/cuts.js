/*
 * @LastEditors: platelets wenkanedward@gmail.com
 * @Date: 2022-10-16 11:08:13
 * @LastEditTime: 2022-10-17 16:03:15
 * Copyright (c) 2022 by platelets email: wenkanedward@gmail.com, All Rights Reserved.
 */
var pages = document.getElementsByClassName("page");
for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = pages.length - i;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < pages.length; i++) {
    //Or var page = pages[i];
    pages[i].pageNum = i + 1;
    pages[i].onclick = function () {
      if (this.pageNum % 2 === 0) {
        this.classList.remove("flipped");
        this.previousElementSibling.classList.remove("flipped");
      } else {
        this.classList.add("flipped");
        this.nextElementSibling.classList.add("flipped");
      }
    };
  }
});

const page1 = document.getElementById("page1");
page1.style.backgroundImage = `url('./img/back/back5.jpg')`;

const page2 = document.getElementById("page2");
page2.style.backgroundImage = `url('./img/back/back0.jpg')`;

const page4 = document.getElementById("page4");
page4.style.backgroundImage = `url("./img/back/back4.jpg")`;
