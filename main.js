function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    return arr[x];
}

let arr=["Rock","Paper","Scissors"]

function playRound(playerChoice,computerChoice){

    playerChoice=playerChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();

    if(playerChoice==computerChoice){
        return "Its a Draw Play Again";
    }

    if(playerChoice==="rock"){
        if(computerChoice==="scissors"){
            return "Yay You Won! Rock beats Scissors";
        }else{
            return "You Lose! Paper beats Rock";
        }
    }else if( playerChoice==="paper"){
        if(computerChoice==="rock"){
            return "Yay You Won! Paper beats Rock";
        }else{
            return "You Lose! Scissors beats Paper";
        }
    }else{
        if(computerChoice==="paper"){
            return "Yay You Won! Scissors beats Paper";
        }else{
            return "You Lose! Rock beats Scissors";
        }
    }
}
let computerScore=0,playerScore=0;
function game(){

    for(let i=0; i<5; i++){
        let playerChoice=prompt("type your choice").toLowerCase();
        while(playerChoice!="rock"&&playerChoice!="paper"&&playerChoice!="scissors"){
            alert("choose between Rock Paper Scissors");
            playerChoice=prompt("type your choice").toLowerCase();
        }
        computerChoice=getComputerChoice();
        let x=playRound(playerChoice,computerChoice);
        if(x.includes("Won"))playerScore++;
        else if(x.includes("Draw")){
            playerScore++;
            computerScore++;
        }else{
            computerScore++;
        }
        console.log(x);
        alert(x+ ' computerScore :'+computerScore+' playerScore :'+playerScore);
    }
}
game();
let y=document.querySelector("h2");
if(computerScore>playerScore){
    y.innerText="computer won with a score of "+computerScore +" against you of score of "+playerScore;
    console.log("computer won with a score of "+computerScore +" against you of score of "+playerScore);
}
else if(computerScore<playerScore){
    y.innerText="You won with a score of "+playerScore+" against computer of score of "+computerScore;
    console.log("You won with a score of "+playerScore +" against computer of score of "+computerScore);
}else{
    y.innerText="Its a Draw with your score and computer score of "+computerScore;
     console.log("Its a Draw with your score and computer score of "+computerScore);

}
