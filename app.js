const game = () => {

 let pScore =0;
 let cScore = 0;

// Start the game
   const startGame =()=>{
       const playbtn = document.querySelector('.intro button');
       const introScreen = document.querySelector('.intro');
       const match =  document.querySelector('.match');


        playbtn.addEventListener('click',()=>{
            introScreen.classList.add("fadeout");
            match.classList.add("fadein");
        });
   }
//Play match
   const playmatch= ()=>{
     const opbutton = document.querySelectorAll('.match button'); 
     const playerhand = document.querySelector('.player-hand');
     const computerhand = document.querySelector('.computer-hand');

    const hands = document.querySelectorAll('.hands img');

     hands.forEach(hand =>{
         hand.addEventListener('animationend',function(){
             this.style.animation = '';
         });
     });

     //computer options
     const computerOptions = ["rock", "paper", "scissors"];

     opbutton.forEach(option =>{
      option.addEventListener("click",function(){
          //computer choice
     const computerNumber = Math.floor(Math.random() * 3 ); 
     const computerChoice = computerOptions[computerNumber];

      setTimeout(() => {
          // Here is where we call comparehands
       compareHands(this.textContent,computerChoice);

       // Update Images
       playerhand.src = `./assets/${this.textContent}.png`;
       computerhand.src= `./assets/${computerChoice}.png`;
  
      }, 2000);         

      playerhand.style.animation = 'shakePlayer 2s ease ';
      computerhand.style.animation = 'shakeComputer 2s ease ';
       
       
      });
     });
   };

const updateScore = ()=>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}


  const compareHands = (playerChoice,computerChoice)=>{
    const winner = document.querySelector('.winner');
if (playerChoice === computerChoice){
    winner.textContent = 'it is a tie';
    return;
}

//check for rock
if (playerChoice === 'rock'){
    if(computerChoice === 'scissors'){
    winner.textContent = 'player wins';
    pScore++;
    updateScore();
    return;}else{
        winner.textContent = 'computer wins';
        cScore++;
        updateScore();
    }
}

if (playerChoice === 'paper'){
    if(computerChoice === 'scissors'){
    winner.textContent = 'computer wins';
    cScore++;
    updateScore();
    return;}else{
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
    }
}

if (playerChoice === 'scissor'){
    if(computerChoice === 'rock'){
    winner.textContent = 'computer wins';
    cScore++;
    updateScore();
    return;}else{
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
    }
}



}

startGame();
playmatch();
}

game()