let timer=5;
let score=0;
let playing;

const ranword= "http://api.quotable.io/random";
const display=document.getElementById("text")
const input=document.getElementById("input")
const scores=document.querySelector("#score")
const time=document.querySelector("#timer")
const alerrt=document.querySelector("#message")
function getrandom()
{
  return fetch(ranword)
  .then(response=>response.json())
  .then(data=>data.content)
}
async function newtext(){
  const quote=await getrandom()
  display.innerText=quote
  input.value=null
  //console.log(quote)
setInterval(updatetime,1000);
setInterval(status,50);
}
newtext()
function updatetime()
{
  if(timer>0){
    timer--;
  }
  else if(timer===0){
playing=false;
  }
  time.innerHTML=timer;
}
function status(){
  if (!playing && timer===0){
    alerrt.innerHTML="Game is over!!!";
  }
}

