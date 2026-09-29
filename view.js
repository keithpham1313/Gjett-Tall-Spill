function updateView(){

    let html = ``;

    for(let i = 0; i < 100; i++){
        html += /*HTML*/ `
        
            <button onclick="guessNumber(this.html)">${[i]}</button>
        `;
    }

    model.app.innerHTML = html;
}



updateView();