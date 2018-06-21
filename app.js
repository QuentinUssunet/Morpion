console.log('Démarrage Morpion !');
let table = document.getElementsByClassName('morpion')[0];
let tour = 0;


//Fonction vérification gagnant


//Fonction Match Nul
let matchNul = document.createElement('div');
matchNul.style.position = 'absolute';
matchNul.style.textAlign = 'center';
matchNul.style.fontSize = '20';
function fMatchNul() {
    if (tour==9) {
        console.log('Match Nul !');
        event.target.appendChild(matchNul);
    }
}

table.addEventListener('click', function(event) {
    let cercle = document.createElement('div');
    cercle.style.height = '70px';
    cercle.style.width = '70px';
    cercle.style.margin = 'auto';
    cercle.style.border = '5px solid blue';
    cercle.style.borderRadius = '50%';

    let croix = document.createElement('h1');
    croix.innerText = 'X';
    croix.style.textAlign = 'center';
    
    
    while(tour<9){ 

        tour=tour+1;    
        console.log('On est dans le while');
        console.log('tour ='+ tour);
        if ((tour%2) != 0) { //Player 1 joue

            console.log('Tour Joueur 1');
            event.target.appendChild(cercle);
            break;
        } else if ((tour%2) == 0){ //Player 2 joue

            console.log('Tour Joueur 2');
            event.target.appendChild(croix);
            break;
        }
        break;
    }
    fMatchNul();
});

