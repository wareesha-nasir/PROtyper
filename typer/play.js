const score1=document.getElementsByClassName("score");
const time=document.getElementsByClassName("timer");
const endgame=document.getElementsByClassName("end-game-container");
let score=0;
let timer=12;
function updateScore() {
    score++;
    score1.innerHTML = score;
  }
  const timeInterval = setInterval(updateTime, 1000);
  // Update time
  function updateTime() {
    timer--;
    time.innerHTML = timer + 's';
  
    if (time === 0) {
      clearInterval(timeInterval);
      // end game
      gameOver();
    }
  }
  
  // Game over, show end screen
  function gameOver() {
    endgame = `
      <h1>Time ran out</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Reload</button>
    `;
  
    endgame.style.display = 'flex';
  }