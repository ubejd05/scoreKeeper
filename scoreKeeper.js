const resetBtn = document.querySelector("#reset");
const winScoreSelect = document.querySelector("#playto") 
let winScore = parseInt(winScoreSelect.value);
let gameOver = false;


const p1 = {
   score: 0,
   button: document.querySelector("#p1btn"),
   display:document.querySelector("#p1display"),
}

const p2 = {
   score: 0,
   button: document.querySelector("#p2btn"),
   display:document.querySelector("#p2display"),
}



function updateScores(player,opponent) {
   if (!gameOver) {
      player.score+=1;
      if (player.score === winScore) {
         gameOver = true;
         player.display.classList.add("winner");
         opponent.display.classList.add("loser");
      }
      player.display.innerText = player.score;
   }
}


p1.button.addEventListener("click", function(){
   updateScores(p1,p2)  
})

p2.button.addEventListener("click", function(){
   updateScores(p2,p1)  
})

winScoreSelect.addEventListener("change", function(){
   winScore = parseInt(this.value);
   reset();
})


resetBtn.addEventListener("click", reset)

function reset() {
   gameOver = false;
   for (const p of [p1,p2]) {
      p.score = 0;
      p.display.innerText=p1.score;
      p.display.classList.remove("winner", "loser")
   }
}