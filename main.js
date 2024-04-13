const matrixButtons = {
  create: document.querySelector("#create_matrix_btn"),
  autoFill: document.querySelector("#auto_fill_btn"),
  add: document.querySelector("#add_btn"),
  subtract: document.querySelector("#subtract_btn"),
  multiply: document.querySelector("#multiply_btn"),
  reset: document.querySelector("#reset_btn"),
};

const matrixInputs = {
  A: document.querySelector(".input_A"),
  B: document.querySelector(".input_B"),
  result: document.querySelector(".result_value"),
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMatrix(
  container,
  rowSelector,
  columnSelector,
  autoFill = false
) {
  const rowInput = document.querySelector(rowSelector);
  const columnInput = document.querySelector(columnSelector);

  container.innerHTML = "";

  for (let columnIndex = 0; columnIndex < columnInput.value; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowInput.value; rowIndex++) {
      let newInput = document.createElement("input");
      if (autoFill) {
        newInput.value = getRandomInt(1, 9);
      }
      container.appendChild(newInput);
    }
    container.appendChild(document.createElement("br"));
  }
}

function performOperation(operation) {
  matrixInputs.result.textContent = "";

  const inputsA = matrixInputs.A.querySelectorAll("input");
  const inputsB = matrixInputs.B.querySelectorAll("input");

  if (inputsA.length !== inputsB.length) {
    alert("에러");
    return;
  }

  const resultMatrix = [];
  const size = Math.sqrt(inputsA.length);

  for (let i = 0; i < inputsA.length; i++) {
    const valueA = parseInt(inputsA[i].value);
    const valueB = parseInt(inputsB[i].value);
    if (operation === "add") {
      resultMatrix.push(valueA + valueB);
    } else if (operation === "subtract") {
      resultMatrix.push(valueA - valueB);
    } else if (operation === "multiply") {
      resultMatrix.push(valueA * valueB);
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
    matrixInputs[input].innerHTML = "";
  }
  generateMatrix(matrixInputs.result, "", "");
});
