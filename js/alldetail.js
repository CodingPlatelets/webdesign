/*
 * @LastEditors: platelets wenkanedward@gmail.com
 * @Date: 2022-10-18 11:34:43
 * @LastEditTime: 2022-10-18 12:00:46
 * Copyright (c) 2022 by platelets email: wenkanedward@gmail.com, All Rights Reserved.
 */
$(".menu-button").click(function () {
  var href = $(this).attr("href");
  scrollAmount = 0;
  if (href == "#section-home") scrollAmount = 0;
  else scrollAmount = $(href).offset().top - 50;

  $("html, body").animate(
    {
      scrollTop: scrollAmount,
    },
    1000
  );
});

const base = document.getElementById("#section-home");
