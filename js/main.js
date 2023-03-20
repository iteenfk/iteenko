"use strict";

const canvas = document.getElementById("canvassample");
const ctx = canvas.getContext("2d");
let moveflg = 0;
let Xpoint;
let Ypoint;
let temp = [];

//初期値（サイズ、色、アルファ値）の決定
const defSize = 7;
const defColor = "#555";

// キャンバスを白色に塗る
ctx.fillStyle = "rgb(255,255,255)";

// ストレージの初期化
const myStorage = localStorage;
window.addEventListener("load", initLocalStorage);

// PC対応
canvas.addEventListener("mousedown", startPoint, false);
canvas.addEventListener("mousemove", movePoint, false);
canvas.addEventListener("mouseup", endPoint, false);
// スマホ対応
canvas.addEventListener("touchstart", startPoint, false);
canvas.addEventListener("touchmove", movePoint, false);
canvas.addEventListener("touchend", endPoint, false);

function startPoint(e){
  e.preventDefault();
  ctx.beginPath();

  Xpoint = e.layerX;
  Ypoint = e.layerY;

  ctx.moveTo(Xpoint, Ypoint);
}

function movePoint(e){
  if(e.buttons === 1 || e.buttons === 1 || e.type === "touchmove"){
    Xpoint = e.layerX;
    Ypoint = e.layerY;
    moveflg = 1;

    ctx.lineTo(Xpoint, Ypoint);
    ctx.lineCap = "round";
    ctx.lineWidth = defSize * 2;
    ctx.strokeStyle = defColor;
    ctx.stroke();
  }
}

function endPoint(e)
{
    if(moveflg === 0){
       ctx.lineTo(Xpoint-1, Ypoint-1);
       ctx.lineCap = "round";
       ctx.lineWidth = defSize * 2;
       ctx.strokeStyle = defColor;
       ctx.stroke();

    }
    moveflg = 0;
    setLocalStorage();
}

function clearCanvas(){
    if(confirm("Canvasを初期化しますか？"))
    {
        initLocalStorage();
        temp = [];
        resetCanvas();
    }
}

function resetCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    ctx.fillStyle = "rgb(255,255,255)";
}

function chgImg()
{
    const png = canvas.toDataURL();
    document.getElementById("newImg").src = png;
}

function initLocalStorage(){
    myStorage.setItem("__log", JSON.stringify([]));
}

function setLocalStorage(){
    const png = canvas.toDataURL();
    const logs = JSON.parse(myStorage.getItem("__log"));

    setTimeout(function(){
        logs.unshift({png:png});
        myStorage.setItem("__log", JSON.stringify(logs));
        temp = [];
    }, 0);
}

function prevCanvas(){
    const logs = JSON.parse(myStorage.getItem("__log"));

    if(logs.length > 0){
        temp.unshift(logs.shift());

        setTimeout(function(){
            myStorage.setItem("__log", JSON.stringify(logs));
            resetCanvas();
            if (logs.length > 0) {
              draw(logs[0]["png"]);
            }
        }, 0);
    }
}

function nextCanvas(){
    const logs = JSON.parse(myStorage.getItem("__log"));

    if(temp.length > 0){
        logs.unshift(temp.shift());

        setTimeout(function(){
            myStorage.setItem("__log", JSON.stringify(logs));
            resetCanvas();
            draw(logs[0]["png"]);
        }, 0);
    }
}

function draw(src) {
    var img = new Image();
    img.src = src;
 
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    }
}
 

