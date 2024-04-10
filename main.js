const create_matrix_btn = document.querySelector("#create_matrix_btn"); // 행렬 생성 버튼
const input_A = document.querySelector(".input_A"); // 행렬A 영역
const input_B = document.querySelector(".input_B"); // 행렬A 영역

create_matrix_btn.addEventListener("click", () => {
  console.log("행렬 생성 버튼이 눌려짐");

  const matrix_A_row = document.querySelector("#matrix_A_row");
  const matrix_A_column = document.querySelector("#matrix_A_column");
  console.log(`행렬A 행 : ${matrix_A_row.value}`);
  console.log(`행렬A 열 : ${matrix_A_column.value}`);
  input_A.textContent = ""; // 초기화

  for (let index = 0; index < matrix_A_column.value; index++) {
    for (let index = 0; index < matrix_A_row.value; index++) {
      let newInput = document.createElement("input");
      input_A.appendChild(newInput);
    }
    input_A.appendChild(document.createElement("br"));
  }

  const matrix_B_row = document.querySelector("#matrix_B_row");
  const matrix_B_column = document.querySelector("#matrix_B_column");
  console.log(`행렬A 행 : ${matrix_B_row.value}`);
  console.log(`행렬A 열 : ${matrix_B_column.value}`);
  input_B.textContent = ""; // 초기화

  for (let index = 0; index < matrix_B_column.value; index++) {
    for (let index = 0; index < matrix_B_row.value; index++) {
      let newInput = document.createElement("input");
      input_B.appendChild(newInput);
    }
    input_B.appendChild(document.createElement("br"));
  }
});
