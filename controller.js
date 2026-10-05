function randomNumber(){
    return Math.floor(Math.random()*100)+1;
}

function startGame(){
    return randomNumber()
}

//
function guessNumber(number){
    let randomNumber = randomNumber();

    if(guessNumber(number) === randomNumber){
        model.data.totalCorrect++;
    }

    model.data.totalGuess++;
}



function message(number){
    if(guessNumber(number) === randomNumber()){
        return "Det er riktig nummer!";
    }
    else{
        return "Det er feil nummer!"
    }
    
}
