const buttons = {
  create: document.querySelector("#create_matrix_btn"), // 행렬 생성 버튼
  autoFill: document.querySelector("#auto_fill_btn"), // 자동입력 버튼
  add: document.querySelector("#add_btn"), // 더하기 버튼
  subtract: document.querySelector("#subtract_btn"), // 빼기 버튼
  multiply: document.querySelector("#multiply_btn"), // 곱하기 버튼
  calculate: document.querySelector("#calculate_btn"), // 계산하기 버튼
  reset: document.querySelector("#reset_btn"), // 초기화 버튼
};

const inputs = {
  A: document.querySelector(".input_A"), // 행렬 A 영역
  B: document.querySelector(".input_B"), // 행렬 B 영역
  result: document.querySelector(".result_value"), // 결과 출력 영역
};

// 1~9 랜덤 값 생성기
function getRandomInt() {
  return Math.floor(Math.random() * 9) + 1;
}

// 행렬 생성 함수
function generateMatrix(
  container,
  rowSelector,
  columnSelector,
  autoFill = false
) {
  const rowInput = document.querySelector(rowSelector); // 행 입력 요소 선택
  const columnInput = document.querySelector(columnSelector); // 열 입력 요소 선택
  console.log(`행 : ${rowInput.value}`);
  console.log(`열 : ${columnInput.value}`);

  container.innerHTML = ""; // 행렬 영역 초기화

  // 행렬 생성 반복문
  for (let columnIndex = 0; columnIndex < columnInput.value; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowInput.value; rowIndex++) {
      let newInput = document.createElement("input"); // 새로운 input 요소 생성
      if (autoFill) {
        newInput.value = getRandomInt(); // 자동입력 모드일 때만 랜덤 값 설정
      }
      container.appendChild(newInput); // input 요소를 행렬 영역에 추가
    }
    container.appendChild(document.createElement("br")); // 행이 끝날 때마다 줄 바꿈 요소 추가
  }
}

// 결과 행렬 생성 함수
function resultMatrix(container) {
  container.innerHTML = ""; // 결과 행렬 영역 초기화
}

// 버튼 이벤트 리스너 등록
buttons.create.addEventListener("click", () => {
  console.log("행렬 생성 버튼이 눌려짐");

  // 행렬 A 생성 함수 호출
  generateMatrix(inputs.A, "#matrix_A_row", "#matrix_A_column");

  // 행렬 B 생성 함수 호출
  generateMatrix(inputs.B, "#matrix_B_row", "#matrix_B_column");
});

buttons.autoFill.addEventListener("click", () => {
  console.log("자동입력 버튼이 눌려짐");

  // 행렬 A 생성 함수 호출 (자동입력 모드)
  generateMatrix(inputs.A, "#matrix_A_row", "#matrix_A_column", true);

  // 행렬 B 생성 함수 호출 (자동입력 모드)
  generateMatrix(inputs.B, "#matrix_B_row", "#matrix_B_column", true);
});

buttons.add.addEventListener("click", () => {
  console.log("더하기 버튼이 눌려짐");

  resultMatrix(inputs.result);
});

buttons.subtract.addEventListener("click", () => {
  console.log("빼기 버튼이 눌려짐");

  resultMatrix(inputs.result);
});

buttons.multiply.addEventListener("click", () => {
  console.log("곱하기 버튼이 눌려짐");

  resultMatrix(inputs.result);
});

buttons.calculate.addEventListener("click", () => {
  console.log("계산하기 버튼이 눌려짐");

  resultMatrix(inputs.result);
});

buttons.reset.addEventListener("click", () => {
  console.log("초기화 버튼이 눌려짐");

  // 모든 입력란 초기화
  for (let input in inputs) {
    inputs[input].innerHTML = "";
  }

  // 결과 출력 영역 초기화
  resultMatrix(inputs.result);
});
