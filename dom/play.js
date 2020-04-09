var ran=Math.floor(Math.random()*6)+1;
var dice="dice"+ran+ ".jpg";
var img=document.querySelectorAll("img")[0];
img.setAttribute("src",dice);
var ran2=Math.floor(Math.random()*6)+1;
var dice2="dice"+ran2+ ".jpg";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",dice2);
if(ran>ran2)
{
    document.querySelector("h1").innerHTML="player1 won!*";
}
else if(ran2>ran){

    document.querySelector("h1").innerHTML="player2 won!*";
}
else{

    document.querySelector("h1").innerHTML="draw";
}