/*
 * @LastEditors: platelets wenkanedward@gmail.com
 * @Date: 2022-10-15 15:17:48
 * @LastEditTime: 2022-10-16 10:59:03
 * Copyright (c) 2022 by platelets email: wenkanedward@gmail.com, All Rights Reserved.
 */
// load page in background

let nIntervId;
function changeBackground() {
  if (!nIntervId) {
    nIntervId = setInterval(changeImg, 5000);
  }
}

const base = document.getElementById("base");
base.style.backgroundImage = `url(./img/back/back0.jpg)`;
window.addEventListener("load", changeBackground);
function changeImg() {
  base.style.backgroundImage = `url(./img/back/back${randomInt(
    7
  )}.jpg)`;
}

function randomInt(i) {
  return Math.floor(Math.random() * i);
}

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
  window.location.href = "start.html";
});
