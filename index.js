let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; 

updateScoreElement();    

function playGame(playerMove){
    let computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You win';
        }
        else if(computerMove === 'scissors'){
            result = 'Tie';
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if(computerMove === 'scissors'){
            result = 'You Lose';
        }
    }
    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else if(computerMove === 'scissors'){
            result = 'You win';
        }
    }

    if(result === 'You win'){
        score.wins++;
    }
    else if(result === 'You Lose'){
        score.losses++;
    }
    else if(result === 'Tie'){
        score.ties++;
    }


    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" alt="">
<img src="images/${computerMove}-emoji.png" alt="">
Computer`;

}


function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove(){
    const randomNumber =  Math.random();
    
    let computerMove;

    if(randomNumber>=0 && randomNumber<1/3){
    computerMove = 'rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove = 'paper';
    }
    else if(randomNumber>=2/3 && randomNumber<1){
        computerMove = 'scissors';
    }
    return computerMove;
}

let isAutoPlay = false;
let interval_id;
function autoPlay(){
    if(!isAutoPlay){
        interval_id = setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
        },1000)
        isAutoPlay = true;
    }
    else{
        clearInterval(interval_id);
        isAutoPlay = false;
    }
}