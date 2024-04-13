// 행렬 관련 버튼과 입력란에 대한 참조
const matrixButtons = {
  create: document.querySelector("#create_matrix_btn"), // 행렬 생성 버튼
  autoFill: document.querySelector("#auto_fill_btn"), // 자동입력 버튼
  add: document.querySelector("#add_btn"), // 더하기 버튼
  subtract: document.querySelector("#subtract_btn"), // 빼기 버튼
  multiply: document.querySelector("#multiply_btn"), // 곱하기 버튼
  reset: document.querySelector("#reset_btn"), // 초기화 버튼
};

// 행렬 입력란에 대한 참조
const matrixInputs = {
  A: document.querySelector(".input_A"), // 행렬 A 입력란
  B: document.querySelector(".input_B"), // 행렬 B 입력란
  result: document.querySelector(".result_value"), // 결과 출력란
};

// 지정된 범위 내의 랜덤 정수 반환
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

  container.innerHTML = ""; // 행렬 영역 초기화

  for (let i = 0; i < columnInput.value; i++) {
    for (let j = 0; j < rowInput.value; j++) {
      let newInput = document.createElement("input"); // 새로운 input 요소 생성
      if (autoFill) {
        newInput.value = getRandomInt(1, 9); // 자동입력 모드일 때만 랜덤 값 설정
      }
      container.appendChild(newInput); // input 요소를 행렬 영역에 추가
    }
    container.appendChild(document.createElement("br")); // 행이 끝날 때마다 줄 바꿈 요소 추가
  }
}

// 행렬 연산 수행 함수
function performOperation(operation) {
  matrixInputs.result.textContent = ""; // 결과 출력란 초기화

  const inputsA = matrixInputs.A.querySelectorAll("input"); // 행렬 A의 입력값
  const inputsB = matrixInputs.B.querySelectorAll("input"); // 행렬 B의 입력값

  if (inputsA.length !== inputsB.length) {
    // 행렬 크기가 다를 경우 에러 처리
    alert("행렬 크기가 다릅니다.");
    return;
  }

  const resultMatrix = [];
  const size = Math.sqrt(inputsA.length); // 행렬의 크기 구하기

  for (let i = 0; i < inputsA.length; i++) {
    const valueA = parseInt(inputsA[i].value);
    const valueB = parseInt(inputsB[i].value);
    if (operation === "add") {
      resultMatrix.push(valueA + valueB); // 덧셈 연산 수행
    } else if (operation === "subtract") {
      resultMatrix.push(valueA - valueB); // 뺄셈 연산 수행
    } else if (operation === "multiply") {
      resultMatrix.push(valueA * valueB); // 곱셈 연산 수행
    }
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const index = i * size + j;
      let newInput = document.createElement("input");
      newInput.value = resultMatrix[index];
      matrixInputs.result.appendChild(newInput);
    }
    matrixInputs.result.appendChild(document.createElement("br"));
  }
}

// 버튼 이벤트 리스너 등록
matrixButtons.create.addEventListener("click", () => {
  generateMatrix(matrixInputs.A, "#matrix_A_row", "#matrix_A_column");
  generateMatrix(matrixInputs.B, "#matrix_B_row", "#matrix_B_column");
});

matrixButtons.autoFill.addEventListener("click", () => {
  generateMatrix(matrixInputs.A, "#matrix_A_row", "#matrix_A_column", true);
  generateMatrix(matrixInputs.B, "#matrix_B_row", "#matrix_B_column", true);
});

matrixButtons.add.addEventListener("click", () => {
  performOperation("add");
});

matrixButtons.subtract.addEventListener("click", () => {
  performOperation("subtract");
});

matrixButtons.multiply.addEventListener("click", () => {
  performOperation("multiply");
});

matrixButtons.reset.addEventListener("click", () => {
  for (let input in matrixInputs) {
    matrixInputs[input].innerHTML = ""; // 모든 입력란 초기화
  }
  generateMatrix(matrixInputs.result, "", ""); // 결과 출력란 초기화
});
