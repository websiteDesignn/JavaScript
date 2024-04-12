"use strict";

const COLORSELECT = document.getElementById("colorSelect");
const BODY = document.getElementById("body");
const BTN = document.getElementById("btn");

function h() {
  BODY.style.backgroundColor = COLORSELECT.value;
}

BTN.addEventListener("click", h);
