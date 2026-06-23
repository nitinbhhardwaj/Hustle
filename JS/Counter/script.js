let x=0;
document.getElementById("inc").onclick=function(){
    x++;
    document.getElementById("box").innerHTML=x;
}
document.getElementById("dec").onclick=function(){
    x--;
    document.getElementById("box").innerHTML=x;
}
document.getElementById("res").onclick=function(){
    document.getElementById("box").innerHTML=0;
}