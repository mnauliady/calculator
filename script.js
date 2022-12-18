const inputNumbers = document.querySelectorAll("button");
const screenValue = document.querySelector(".input-screen");
const resultValue = document.querySelector(".result-screen");
const checkNumbers = document.querySelectorAll(".number");
const checkOperations = document.querySelectorAll(".operation");

function calculate(value1, value2, operation) {
  if (operation == "+") {
    result = value1 + value2;
  } else if (operation == "-") {
    result = value1 - value2;
  } else if (operation == "*") {
    result = value1 * value2;
  } else if (operation == "/") {
    result = value1 / value2;
  }
  console.log("result = " + result);
  resultValue.value = result;
}

// clear button
const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  screenValue.value = "";
  resultValue.value = "";
  value1 = "";
  value2 = "";
  operation = "";
});

// delete button
const del = document.getElementById("del");
del.addEventListener("click", function () {
  if (value2 != "") {
    value2 = value2.slice(0, value2.length - 1);
    screenValue.value = screenValue.value = value1 + operation + value2;
    // console.log("hapus v2 : " + value2);
  } else if (operation != "") {
    operation = operation.slice(0, operation.length - 1);
    screenValue.value = value1 + operation;
  } else if (value1 != "") {
    value1 = value1.slice(0, value1.length - 1);
    screenValue.value = value1;
  }
});

// equal button
const equal = document.getElementById("equal");
equal.addEventListener("click", function () {
  if (value1 != "") {
    calculate(Number(value1), Number(value2), operation);
  }
  value1 = resultValue.value;
  screenValue.value = value1;
  console.log("1 baru: " + value1);
  value2 = "";
  operation = "";
});

// operation button
let operation = "";
checkOperations.forEach(function (checkOperation) {
  checkOperation.addEventListener("click", function (e) {
    operation = e.target.value;

    if (value1 != "") {
      screenValue.value = value1 + operation;
    }
  });
});

// number button
let value1 = "";
let value2 = "";
checkNumbers.forEach(function (checkNumber) {
  checkNumber.addEventListener("click", function () {
    // set the first value
    if (operation == "") {
      if (resultValue.value != "") {
        // set value1 for second calculating
        // if click number(not operation) after first calculating the value1 set to ""
        value1 = "";
        resultValue.value = "";
        if (value1 == "" && checkNumber.value == ".") {
          // if . first character
          screenValue.value = "";
        } else {
          value1 = value1 + checkNumber.value;
          screenValue.value = value1;
        }
      } else {
        // set value1 for first or second calculating
        if (value1 == "" && checkNumber.value == ".") {
          // if . first character
          screenValue.value = "";
        } else if (value1 == "0" && checkNumber.value != ".") {
          // if first is 0 the second character must .
          // if not . the 0 will change to current value number
          value1 = checkNumber.value;
          screenValue.value = value1;
        } else if (value1 == "0." && checkNumber.value == ".") {
          // if first is 0. the next character must except .
          value1 = value1;
          screenValue.value = value1;
        } else if (value1.slice(-1) == "." && checkNumber.value == ".") {
          value1 = value1;
          screenValue.value = value1;
        } else {
          value1 = value1 + checkNumber.value;
          screenValue.value = value1;
        }
      }

      console.log("1 " + value1);
    } else if (operation != "") {
      // set second value
      if (value2 == "" && checkNumber.value == ".") {
        // if . first character
        screenValue.value = value1 + operation + value2;
      } else if (value2 == "0" && checkNumber.value != ".") {
        value2 = value2;
        screenValue.value = value1 + operation + value2;
      } else if (value2 == "0." && checkNumber.value == ".") {
        // if first is 0. the next character must except .
        value2 = value2;
        screenValue.value = value1 + operation + value2;
      } else if (value2.slice(-1) == "." && checkNumber.value == ".") {
        value2 = value2;
        screenValue.value = value1 + operation + value2;
      } else {
        value2 = value2 + checkNumber.value;
        screenValue.value = value1 + operation + value2;
      }

      console.log("2 " + value2);
      // value2 = "";
    }
  });
});
