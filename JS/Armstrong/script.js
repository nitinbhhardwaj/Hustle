let n=window.prompt("Enter the number?");
let temp=n;
let digits=n.toString().length;
let sum=0;

while(temp>0){
    let digit=temp%10;
    sum+=digit**digits;
    temp=Math.floor(temp/10);
}
if(sum==n){
    document.getElementById("head").textContent="Armstrong Number";
}
else{
     document.getElementById("head").textContent="Not a Armstrong Number";
}
