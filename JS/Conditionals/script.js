document.getElementById("submit").onclick=function(){
    let age=document.getElementById("age").value;
    age=Number(age);
    if(age>=18){
        document.getElementById("head").textContent=`Eligible to vote`;
    }
    else{
        document.getElementById("head").textContent=`Not Eligible to vote`;
    }
    
}



