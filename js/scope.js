var myVar = 'Hello global';
var myVar2 = 'Hello global2';

function myFunction() {
    var myVar2 = 'Hello local';
    var myLocalVar = 'Hello local2';

    console.log(myVar);
    console.log(myVar2);
    console.log(myLocalVar);
}

console.log(myVar);
console.log(myVar2);
// console.log(myLocalVar); // provoque une erreur "ReferenceError: myLocalVar is not defined"

myFunction();

// réécriture de la fonction `bonusLives()` (du fichier `fonctions.js`) en mettant la variable `slice` à l'extérieur

// Math.floor(0.123) -> 0
// Math.floor(2.123) -> 2
// 1 tranche de 50 pts == 1 une vie bonus
// cette fonctions renvoit le nombre de vies bonus auquel donne droit le score d'un joueur
var slice = 50;

function bonusLives(score) {
    return Math.floor(score / slice);
}

var score = 123;
var lives = bonusLives(score);
console.log(lives);
