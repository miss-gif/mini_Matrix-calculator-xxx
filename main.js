const create_matrix_btn = document.querySelector("#create_matrix_btn"); // 행렬 생성 버튼
const input_A = document.querySelector(".input_A"); // 행렬 A 영역
const input_B = document.querySelector(".input_B"); // 행렬 B 영역

// 1~9 랜덤 값 생성기
function getRandomInt() {
  return Math.floor(Math.random() * 9) + 1;
}

// 행렬 생성 버튼에 이벤트 리스너 추가
create_matrix_btn.addEventListener("click", () => {
  console.log("행렬 생성 버튼이 눌려짐");

  // 행렬 A 생성 함수 호출
  generateMatrix(input_A, "#matrix_A_row", "#matrix_A_column");

  // 행렬 B 생성 함수 호출
  generateMatrix(input_B, "#matrix_B_row", "#matrix_B_column");
});

// 행렬 생성 함수
function generateMatrix(container, rowSelector, columnSelector) {
  const rowInput = document.querySelector(rowSelector); // 행 입력 요소 선택
  const columnInput = document.querySelector(columnSelector); // 열 입력 요소 선택
  console.log(`행 : ${rowInput.value}`);
  console.log(`열 : ${columnInput.value}`);

  container.innerHTML = ""; // 행렬 영역 초기화

  // 행렬 생성 반복문
  for (let columnIndex = 0; columnIndex < columnInput.value; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowInput.value; rowIndex++) {
      let newInput = document.createElement("input"); // 새로운 input 요소 생성
      // newInput.value = getRandomInt();
      container.appendChild(newInput); // input 요소를 행렬 영역에 추가
    }
    container.appendChild(document.createElement("br")); // 행이 끝날 때마다 줄 바꿈 요소 추가
  }
}

const auto_fill_btn = document.querySelector("#auto_fill_btn"); // 자동입력 버튼

auto_fill_btn.addEventListener("click", () => {
  console.log("자동입력 버튼이 눌려짐");
  // 행렬 A 생성 함수 호출
  generateMatrixAuto(input_A, "#matrix_A_row", "#matrix_A_column");

  // 행렬 B 생성 함수 호출
  generateMatrixAuto(input_B, "#matrix_B_row", "#matrix_B_column");
});

// 행렬 생성 함수
function generateMatrixAuto(container, rowSelector, columnSelector) {
  const rowInput = document.querySelector(rowSelector); // 행 입력 요소 선택
  const columnInput = document.querySelector(columnSelector); // 열 입력 요소 선택
  console.log(`행 : ${rowInput.value}`);
  console.log(`열 : ${columnInput.value}`);

  container.innerHTML = ""; // 행렬 영역 초기화

  // 행렬 생성 반복문
  for (let columnIndex = 0; columnIndex < columnInput.value; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowInput.value; rowIndex++) {
      let newInput = document.createElement("input"); // 새로운 input 요소 생성
      newInput.value = getRandomInt();
      container.appendChild(newInput); // input 요소를 행렬 영역에 추가
    }
    container.appendChild(document.createElement("br")); // 행이 끝날 때마다 줄 바꿈 요소 추가
  }
}
