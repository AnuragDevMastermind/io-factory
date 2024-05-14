let txtInput

function checkValidation() {
  txtInput = document.getElementById("txtInput").value
  const txtValidationMsgElement = document.getElementById("txtValidation")
  const btnSubmitElement = document.getElementById("btnSubmit")

  // all input validation condition
  const isNotNum = /[^0-9,]/.test(txtInput) // input must be number validation
  const isconsecutiveComma = /,,/.test(txtInput) // no consecutive comma validation
  const isCommaAtStart = txtInput.charAt(0) === "," // no comma at start validation
  const isCommaAtEnd = txtInput.charAt(txtInput.length - 1) === "," // no comma at end validation
  const isAllInputZero = txtInput.split(",").every((value) => value === "0") // all input not equal zero validation
  const isEmpty = txtInput.trim() === "" // input not empty validation

  const isValidInput =
    isNotNum ||
    isconsecutiveComma ||
    isAllInputZero ||
    isCommaAtEnd ||
    isCommaAtStart;

  if (isEmpty) {
    txtValidationMsgElement.textContent = "";
    btnSubmitElement.disabled = true;
  } else if (isValidInput) {
    txtValidationMsgElement.style.color = "red";
    txtValidationMsgElement.textContent = "invalid";
    btnSubmitElement.disabled = true;
  } else {
    txtValidationMsgElement.style.color = "green";
    txtValidationMsgElement.textContent = "valid";
    btnSubmitElement.disabled = false;
  }
}

function setValidationMessage(msgElement, message) {
  const btnSubmitElement = document.getElementById("btnSubmit")
  msgElement.textContent = message
  msgElement.style.color = message === "valid" ? "black" : "red"
  btnSubmitElement.disabled = message != "valid"
}

function btnSubmitClick() {
  const inputNumArr = txtInput.split(",").map(Number)
  const requiredData = calculateRequiredData(inputNumArr)
  const table2dArr = requiredData[0]
  const totalWaterUnits = requiredData[1]

  showGraph(table2dArr, txtInput, totalWaterUnits)
}

function showGraph(table2dArr, inputData, outputData) {
  const inputAndOutputTableHtmlArr = createInputAndOutputTableHtml(table2dArr)
  const inputTableHtml = inputAndOutputTableHtmlArr[0]
  const outputTableHtml = inputAndOutputTableHtmlArr[1]

  let resultElement = document.getElementById("result")
  resultElement.innerHTML = `<p style="font-size: 15px">Input</p>`
  resultElement.innerHTML += `<p style="font-size: 15px">[${inputData}]</p>`
  resultElement.innerHTML += inputTableHtml
  resultElement.innerHTML += `<p style="font-size: 15px">Output</p>`
  resultElement.innerHTML += `<p style="font-size: 15px">${outputData} units</p>`
  resultElement.innerHTML += outputTableHtml
}

function createInputAndOutputTableHtml(table2dArr) {
  let inputTableHTML = "<table>"
  let outputTableHTML = "<table>"

  // adding blank row at the top
  inputTableHTML += "<tr>"
  outputTableHTML += "<tr>"
  for (let column = 0; column < table2dArr[0].length; column++) {
    inputTableHTML += `<td></td>`
    outputTableHTML += `<td></td>`
  }
  inputTableHTML += "</tr>"
  outputTableHTML += "</tr>"

  // adding colors
  for (let row = 0; row < table2dArr.length; row++) {
    inputTableHTML += "<tr>"
    outputTableHTML += "<tr>"

    for (let column = 0; column < table2dArr[row].length; column++) {
      if (table2dArr[row][column] === 0) {
        inputTableHTML += `<td></td>`
        outputTableHTML += `<td></td>`
      } else if (table2dArr[row][column] === 1) {
        inputTableHTML += `<td style="background-color: yellow"></td>`
        outputTableHTML += `<td></td>`
      } else {
        inputTableHTML += `<td style="background-color: skyblue"></td>`
        outputTableHTML += `<td style="background-color: skyblue"></td>`
      }
    }

    inputTableHTML += "</tr>"
    outputTableHTML += "</tr>"
  }

  inputTableHTML += "</table>"
  outputTableHTML += "</table>"

  return [inputTableHTML, outputTableHTML]
}

function calculateRequiredData(height) {

  const maxWaterLevel = Math.max(...height)

  const n = height.length

  let waterBlocks = 0
  const waterTrappedArr = new Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    waterTrappedArr[i] = maxWaterLevel - height[i]
    waterBlocks += waterTrappedArr[i]
  }

  const maxHeight = Math.max(...height)
  const table2dArr = Array.from({ length: maxHeight }, () =>
    Array.from({ length: height.length }, () => 0)
  )

  let blockHeight
  let waterHeight
  for (let col = 0; col < height.length; col++) {
    blockHeight = height[col]
    waterHeight = waterTrappedArr[col]

    for (let row = maxHeight - 1; row >= 0; row--) {
      if (blockHeight > 0) {
        table2dArr[row][col] = 1
        blockHeight--
      } else if (waterHeight > 0) {
        table2dArr[row][col] = 2
        waterHeight--
      }
    }
  }

  return [table2dArr, waterBlocks]
}
