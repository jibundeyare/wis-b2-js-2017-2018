var myArr = [123, 2, 42, 3.14];

// boucle for each avec la clé
for (var key in myArr) {
    console.log(myArr[key]);
}

// boucle for each sans la clé
for (var item of myArr) {
    console.log(item);
}

// boucle for each, version POO
myArr.forEach(function(item, index, list) {
    console.log(item);
});

// boucle for classique
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

var i = 10;
do {
    console.log(i);
    i--;
} while (i > 0);
