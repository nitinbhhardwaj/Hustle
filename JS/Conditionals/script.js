// document.getElementById("submit").onclick=function(){
//     let age=document.getElementById("age").value;
//     age=Number(age);
//     if(age>=18){
//         document.getElementById("head").textContent=`Eligible to vote`;
//     }
//     else{
//         document.getElementById("head").textContent=`Not Eligible to vote`;
//     }
    
// }

let n=window.prompt("Enter the number?");
let flag=true;
for(let i=1;i<=n/2;i++){
    if(n%i==0){
        flag=false;
        break;
    }
}
if(flag==true){
    document.getElementById("head").textContent="Prime Number";
}
else{
    document.getElementById("head").textContent="Composite Number";
}


