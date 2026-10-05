function randomNumber(){
    return Math.floor(Math.random()*100)+1;
}

function startGame(){
    model.data.randomNumber = randomNumber();
    model.data.totalGuess = 0;
    model.data.usedNumbers = [];

    updateView();
}

//
function guessNumber(number){
    
    model.data.totalGuess++;

    model.data.usedNumbers.push(number);

    if(Number(number) === model.data.randomNumber){
        model.data.totalCorrect++;

        alert("Det er riktig nummer!");
    }
    else if(Number(number) < model.data.randomNumber){
        alert("For Lavt!");
    }
    else{
        alert("For høyt!");
    }

    updateView();    

}



function message(number){
    if(guessNumber(number) === randomNumber()){
        return "Det er riktig nummer!";
    }
    else{
        return "Det er feil nummer!"
    }
    
}
