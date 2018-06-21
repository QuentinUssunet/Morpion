// Utilisation d'une IIFE (Immediately-Invoked Function Expression)

(function() {
    console.log('Démarrage Morpion !');
    let table = document.getElementsByClassName('morpion')[0];

    let Player = function(username, className) {
        this.username = username;
        this.className = className;
        this.index = null;
        this.getName = function() {
            return this.username;
        };
    };

    let Game = function() {
        this.turnCount = 0;
        this.players = [
            new Player(prompt('Pseudo du Joueur 1 : '), 'cercle'),
            new Player(prompt('Pseudo du Joueur 2 : '), 'croix')
        ];
        this.data = [
            [], [], []
        ];
        this.playing = false;
        this.initialize = function() {
            //Récupérer pour chaque th de la table et associer une fonction play() sur l'évenement 'click'.
            
            console.log('Fonction play() activée, Bonne Partie !');
            let cell = document.getElementsByTagName('td');
            
            
        }
    };

    window.Morpion = new Game();
}) ();


