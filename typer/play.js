window.addEventListener('load',newtext)
let timer=15
let score=0
let playing

const level=document.getElementById("option")
const display=document.getElementById("text")
const input=document.getElementById("input")
const scores=document.querySelector("#score")
const time=document.querySelector("#timer")
const alerrt=document.querySelector("#message")
const words=[
'happy',
  'superficial',
  'dove',
  'bruise',
  'horrible',
  'desperate',
  'temperature',
  'flock',
  'stagnant',
  'awful',
  'amazing',
  'sacrifice',
  'practice',
  'cheerful',
  'lubricants',
  'knight',
  'igloo',
  'jeopardy',
  'entertainment',
  'zeal',
  'yatch',
  'glorious',
  'fundamental',
  'nomads',
  'miserable',
  'terrified',
'robotics',
'wonderful',
'quince'
];

 function newtext(){
   //display words
  showWord(words)
  input.addEventListener('input',matchwords)
  //console.log(quote)
setInterval(updatetime,1000)
setInterval(status,50)
}
function showWord(words){
  const ranw=Math.floor(Math.random()*words.length)
  display.innerHTML=words[ranw]
}
newtext()
showWord(words)
function updatetime()
{
  if(timer>0){
    timer--
  }
  else if(timer===0){
playing=false
  }
  time.innerHTML=timer
}
function status(){
  if (!playing && timer===0){
    alerrt.innerHTML="Game is over!!!"
    score=-1
  }
}
function matchwords(){
  if(match()){
    playing=true
    timer=15
showWord(words)
input.value=""
    score++;
  }
  if(score===-1){
    scores.innerHTML=0
  }else{
  scores.innerHTML=score
  }
  
}
function match(){
  if(input.value===display.innerHTML){
    alerrt.innerHTML="correct!!"
    return true;
  }else {
    alerrt.innerHTML=""
    return false
  }
}


