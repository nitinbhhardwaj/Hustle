const pi=3.14159;
let radius;

// radius=window.prompt("Enter the radius of the circle?");
// document.getElementById("head").textContent=`Circumference of the circle: ${2*radius*pi}`;


// document.getElementById("submit").onclick=function(){
//     radius=document.getElementById("radius").value;
//     let circumference=2*pi*radius;
//     document.getElementById("newhead").textContent=`Circumference of circle is ${circumference}`;
// }





























document.getElementById("submit").onclick=function(){
    radius=document.getElementById("radius").value;
    document.getElementById("para").textContent=`Parameter=${2*3.14*radius}`;
}
document.getElementById("sub").onclick=function(){
    radius=document.getElementById("radius").value;
    document.getElementById("para").textContent=`Area=${3.14*radius**2}`;
}