function updateView(){

    let html = /*HTML*/`
    <h2>Gjetteleken</h2>
    
    <b>Antall forsøk: ${model.data.totalGuess}</b>
    <br>
    <b>Antall riktige: ${model.data.totalCorrect}</b>
    
    <br><br>
    <button onclick="startGame()">Start spillet!</button>
    <br><br>
    `;

    for(let i = 1; i <= 100; i++){

        let used = model.data.usedNumbers.includes(i);

        let disabled = '';
        let cssClass = '';

            if(used){
                disabled = 'disabled';
                cssClass = 'used';
            }
                        
        html += /*HTML*/ `
        
            <button 
                onclick="guessNumber(${i})"
                
                ${disabled}
                class="${cssClass}"

            >${i}</button>
        `;
    }

    model.app.innerHTML = html;
}



updateView();