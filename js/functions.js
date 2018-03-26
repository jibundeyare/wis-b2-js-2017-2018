function average(myArray) {
    var sum = 0;

    for (var key in myArray) {
        sum = sum + myArray[key];
    }

    return sum / myArray.length;
}

var myPoints = [2, 42, 123, 100];

var avrg = average(myPoints);
console.log(avrg);

// y = a * x + b
function line(x) {
    var a = 1;
    var b = 2;

    return a * x + b;
}

var x = 10;
var y = line(x);
console.log(y);

// Math.floor(0.123) -> 0
// Math.floor(2.123) -> 2
// 1 tranche de 50 pts == 1 une vie bonus
// cette fonctions renvoit le nombre de vies bonus auquel donne droit le score d'un joueur
function bonusLives(score) {
    var slice = 50;

    return Math.floor(score / slice);
}

var score = 123;
var lives = bonusLives(score);
console.log(lives);
