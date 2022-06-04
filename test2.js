var mybody=document.getElementsByTagName("body")[0];
var colors=["orange", "blue", "green", "pink"];
var count=0;
function colorchanger(){
    if(count>=4){
        count=0;
    }
    mybody.style.background = colors[count];
    count++;
}
setInterval(colorchanger, 3000);
var sec=document.getElementById("5");
var b1=new Date(2022,5,5);
var b2=new Date(2003,10,14);
var diff=b1.getTime()-b2.getTime();
sec.innerHTML=diff;
function rec(){
    diff++;
    sec.innerHTML=diff;
}
setInterval(rec,1);