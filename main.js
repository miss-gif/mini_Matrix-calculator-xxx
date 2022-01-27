let produce_btn = document.querySelector("#produce_btn"); //생성하기 버튼
let input_a = document.querySelector(".input_a");
let input_b = document.querySelector(".input_b");

produce_btn.addEventListener("click", function () {
  let procession_A_row = document.querySelector("#procession_A_row").value;
  let procession_A_column = document.querySelector("#procession_A_column").value;
  let procession_B_row = document.querySelector("#procession_B_row").value;
  let procession_B_column = document.querySelector("#procession_B_column").value;

  input_a.innerHTML = procession_A_row + procession_A_column;
  input_b.innerHTML = procession_B_row + procession_B_column;
});

let plus_btn = document.querySelector("#plus_btn"); //더하기 버튼
let minus_btn = document.querySelector("#minus_btn"); //빼기 버튼
let multiply_btn = document.querySelector("#multiply_btn"); //곱하기 버튼
let arithmetic_operation = document.querySelector(".arithmetic_operation"); //사칙연산 출력

plus_btn.addEventListener("click", function () {
  arithmetic_operation.innerHTML = "<span class='material-icons'> add </span>";
});

minus_btn.addEventListener("click", function () {
  arithmetic_operation.innerHTML = "<span class='material-icons'> remove </span>";
});

multiply_btn.addEventListener("click", function () {
  arithmetic_operation.innerHTML = "<span class='material-icons'> close </span>";
});

let reset_btn = document.querySelector("#reset_btn"); //리셋 버튼

reset_btn.addEventListener("click", function () {
  input_a.innerHTML = "";
  input_b.innerHTML = "";
  arithmetic_operation.innerHTML = "";
  equals_value.innerHTML = "";
  input_value.innerHTML = "";
});
