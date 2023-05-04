"use strict"

function addToDo() {
    const newToDo = document.getElementById("new").value;

    const li = document.createElement("li");

    const text = document.createTextNode(newToDo);
    li.appendChild(text);

    const ul = document.getElementById("toDoList");
    ul.appendChild(li);

    document.getElementById("new").value = "";
}

function printpdf() {
    window.print();
}
