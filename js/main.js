 "use strict"

  function add() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x + y;
    document.getElementById("z").value = z;
  }
  
  function sub() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x - y;
    document.getElementById("z").value = z;
  }
  
  function mul() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x * y;
    document.getElementById("z").value = z;
  }
  
  function div() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x / y;
    document.getElementById("z").value = z;
  }

  function cl() {
    document.getElementById("x").value = 0;
    document.getElementById("y").value = 0;
    document.getElementById("z").value = 0;
  }

  function rem() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x % y;
    document.getElementById("z").value = z;

  }

  function quo() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = Math.floor(x / y);
    document.getElementById("z").value = z;

  }

  function squ() {
    const x = parseFloat(document.getElementById("x").value);
    const z = Math.sqrt(x);
    document.getElementById("z").value = z;

  }



  