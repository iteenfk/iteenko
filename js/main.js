"use strict"

const slider = document.getElementById("slider");
const btn = document.getElementById("btn");

slider.addEventListener("input", () =>{
    const passwardLength = document.getElementById("passward-length");

    passwardLength.textContent = slider.value;
});

btn.addEventListener("click", () =>{
    
    const result = document.getElementById("result");
    const numbersCheckbox = document.getElementById("numbers-checkbox");
    const symbolsCheckbox = document.getElementById("symbols-checkbox");

    const letters ="abcdefghijklmnopqrstuvwxyz";
    const numbers ="0123456789";
    const symbols = "#$%&()!{}*+|~[]";

    let passward = "";
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked === true){
        seed += numbers;
    }

    if (symbolsCheckbox.checked === true){
        seed += symbols;
    }

    for (let i = 0; i < slider.value; i++){
        passward += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = passward;
});