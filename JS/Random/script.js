const min=1;
const max=6;

let x=document.getElementById("label1");
let y=document.getElementById("label2");
let z=document.getElementById("label3");

document.getElementById("Dice").onclick=function(){
    x.textContent=Math.floor(Math.random()*max)+min;
    y.textContent=Math.floor(Math.random()*max)+min;
    z.textContent=Math.floor(Math.random()*max)+min;
}