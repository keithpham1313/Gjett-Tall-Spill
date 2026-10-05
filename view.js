function updateView(){

    let html = /*HTML*/`
    <h2>Gjetteleken</h2>
    
    <b>Antall forsøk: ${model.data.totalGuess}</b>
    <b>Antall riktig: ${model.data.totalCorrect}</b>

    <button onclick="startGame()">Start spillet!</button>
    `;

    for(let i = 0; i < 100; i++){
        html += /*HTML*/ `
        
            <button onclick="guessNumber(this.html)">${[i]}</button>
        `;
    }

    model.app.innerHTML = html;
}



updateView();