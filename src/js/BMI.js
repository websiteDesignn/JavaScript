import Swal from "sweetalert2";

import { Result } from "postcss";

const INPUT_WEIGHT = document.getElementById("input-weight");
const INPUT_HEIGHT = document.getElementById("input-height");
const BTN_CALCULATE = document.getElementById("btn-calculate");
const RESULT_HOLDER = document.getElementById("result-holder");
const BTN_RESET = document.getElementById("btn-reset");

BTN_CALCULATE.addEventListener("click", calculateBmi);
BTN_RESET.addEventListener("click", reset);

function reset() {
  RESULT_HOLDER.innerText = "بازنشانی شد";
  Swal.fire({
    toast: true,
    position: "top-end",
    text: "بازنشانی شد",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
}

function calculateBmi() {
  const WEIGHT = parseInt(INPUT_WEIGHT.value);
  const HEIGHT = parseInt(INPUT_HEIGHT.value);
  Swal.fire({
    timer: 2000,
    timerProgressBar: true,
    position: "top-end",
    toast: "true",
    icon: "success",
    title: "محاسبه شد",
    showConfirmButton: false,
  });

  if (WEIGHT === 0) RESULT_HOLDER.innerText = "چه لاغر";
  if (HEIGHT <= 29) RESULT_HOLDER.innerText = "چه فنچ";

  if (WEIGHT >= 1 && HEIGHT >= 30) {
    const BMI = Math.round(WEIGHT / ((HEIGHT / 100) * (HEIGHT / 100)));
    RESULT_HOLDER.innerText = `${BMI}:نتیجه`;
  }
}
