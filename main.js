function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    return arr[x];
}

let arr=["Rock","Paper","Scissors"]

let computerPoints=0,playerPoints=0,totalRounds=0;
const playerSpan=document.querySelector('.pScore');
const computerSpan=document.querySelector('.cScore');

function playRound(playerChoice,computerChoice){

    playerChoice=playerChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    let ans="",whoincreased=0;

    if(playerChoice==computerChoice){
        computerPoints++;
        playerPoints++;
        whoincreased+=2//both;
        ans= "Its a Draw Play Again";
    }

    else if(playerChoice==="rock"){
        if(computerChoice==="scissors"){
            playerPoints++;
            whoincreased=1;
            ans= "Yay You Won! Rock beats Scissors";
        }else{
            computerPoints++;
            ans= "You Lose! Paper beats Rock";
        }
    }else if( playerChoice==="paper"){
        if(computerChoice==="rock"){
            playerPoints++;
            whoincreased=1;
            ans= "Yay You Won! Paper beats Rock";
        }else{
            computerPoints++;
            ans= "You Lose! Scissors beats Paper";
        }
    }else{
        if(computerChoice==="paper"){
            playerPoints++;
            whoincreased=1;
            ans= "Yay You Won! Scissors beats Paper";
        }else{
            computerPoints++;
            ans= "You Lose! Rock beats Scissors";
        }
    }
    if(whoincreased==2){
        computerSpan.textContent=computerPoints;
        playerSpan.textContent=playerPoints;
    }else if(whoincreased==1){
        playerSpan.textContent=playerPoints;
    }else{
        computerSpan.textContent=computerPoints;
    }
    return ans;
}

const buttons=document.querySelectorAll('.two');
const divthree=document.querySelector('.three');
const divfour=document.querySelector('.four');
function callBck(e){
    totalRounds++;
    if(totalRounds==1){
        divfour.textContent="";
        computerSpan.textContent=computerPoints;
        playerSpan.textContent=playerPoints;
    }
    const playerChoice=e.target.getAttribute("data-key");
    const computerChoice=getComputerChoice();
    const winner=playRound(playerChoice,computerChoice);
    divthree.textContent=winner;
    if(totalRounds==5){
        if(playerPoints==computerPoints){
            divfour.textContent="Its a Draw! Lets Try Again\n";
        }else if(playerPoints>computerPoints){
            divfour.textContent="YAY YOU WON! THIS 5 ROUND GAME \n";
        }else{
            divfour.textContent="AHHHH! YOU LOST! THIS 5 ROUND GAME TRY AGAIN\n";
        }
        totalRounds=0;
        computerPoints=0;
        playerPoints=0;
    }
};
buttons.forEach(button=>{
    button.addEventListener('click',callBck)
})
