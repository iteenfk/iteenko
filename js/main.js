 "use strict"

  function add() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const result = firstNumber + secondNumber;
    document.getElementById("result").value = result;
  }
  
  function subtract() {
    
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const result = firstNumber - secondNumber;
    document.getElementById("result").value = result;
  }
  
  function multiply() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const result = firstNumber * secondNumber;
    document.getElementById("result").value = result;
  }
  
  function divide() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const result = firstNumber / secondNumber;
    document.getElementById("result").value = result;
  }

  function clearResult() {
    document.getElementById("firstNumber").value = 0;
    document.getElementById("secondNumber").value = 0;
    document.getElementById("result").value = 0;
  }

  function triangle() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const result = (firstNumber * secondNumber) / 2;
    document.getElementById("result").value = result;

  }

  