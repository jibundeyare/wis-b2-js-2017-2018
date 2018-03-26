if (true) {
    console.log('Ce message est toujours affiché');
}

if (false) {
    console.log('Ce message n\'est jamais affiché');
}

var points = 150;

if (points > 100) {
    console.log('le joueur a droit à une vie');
}

var isRegistered = true;
var hasPayed = true;

if (isRegistered && hasPayed) {
    console.log('envoyer la commande');
} else {
    console.log('bloquer la commande');
}

var hasCredit = true;
var hasPayed = false;

if (hasCredit || hasPayed) {
    console.log('autoriser l\'accès');
} else {
    console.log('bloquer l\'accès');
}
