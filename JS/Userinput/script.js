//How to accept user input

//1.EASY WAY = window prompt
//2.PROFFESIONAL WAY = HTML textbox

// let username=window.prompt("What is your name?");
// document.getElementById("para").innerHTML=`Welcome ${username}`;

// document.getElementById("submit").onclick=function(){
//     username=document.getElementById("username").value;
//     document.getElementById("head").innerHTML=`Welcome ${username}`;
// }
























document.getElementById("submit").onclick=function(){
    name= document.getElementById("name").value;
    branch= document.getElementById("branch").value;
    section= document.getElementById("section").value;
    number= document.getElementById("number").value;
    document.getElementById("para").innerHTML=`Name: ${name} Branch&Section: ${branch}${section} Phone Number: ${number} `;

}