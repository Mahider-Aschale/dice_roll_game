
var diceRoll=Math.floor(Math.random()*6)+1;
var diceRollImage="image/dice"+ diceRoll+".png";
document.querySelectorAll("img")[0].setAttribute("src" ,diceRollImage);


var diceRoll1=Math.floor(Math.random()*6)+1;
var diceRollImage1="image/dice"+ diceRoll1+".png";
document.querySelectorAll("img")[1].setAttribute("src" ,diceRollImage1);
if(diceRollImage>diceRollImage1)
{
document.querySelector(".nav").innerHTML="PLAYER 1 WINS";
}else if(diceRollImage<diceRollImage1){
document.querySelector(".nav").innerHTML="PLAYER 2 WINS";
}else{
    document.querySelector(".nav").innerHTML="DRAW!";
}
var rollBtn=document.querySelector(".buttonroll");
rollBtn.addEventListener("click",refreshPage);

function refreshPage(){
    location.reload();
}
/* var diceRoll1=Math.floor((Math.random*6))+1;
var diceRollImage1="./image/dice"+ diceRoll1+".jpg";
document.querySelector("img")[1].setAttribute("src" ,diceRollImage1); */


