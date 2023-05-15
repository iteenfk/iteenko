"use strict"

function S() {
    let inp = document.getElementById("inp").value;
    let out = document.getElementById("out");
  
    let li = document.createElement("li");
    li.textContent = inp;
  
    out.appendChild(li);

    document.getElementById("inp").value = "";
  }
  
function C(){
  const ul = document.getElementById("out");
  while (ul.firstChild != null) {
      ul.removeChild(ul.firstChild);
  }

}


function P(){
    window.print()
}

