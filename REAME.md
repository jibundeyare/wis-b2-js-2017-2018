# JavaScript jQuery

## Créer un bundle avec Webpack

Créer un bundle `js/webpack-hello-bundle.js` dont le point d'entrée est `js/webpack-hello-main.js` :

    npx webpack js/webpack-hello-main.js js/webpack-hello-bundle.js

## Créer un bundle qui a besoin de jQuery pour fonctionner

### Configurer Webpack pour qu'il injecte jQuery dès qu'il détecte un import

Créer un fichier `webpack.config.js` et y insérer le code suivant :

    module.exports = {
        resolve: {
            alias: {
                jquery: 'jquery/src/jquery'
            }
        }
    };

### Créer le bundle

Créer un bundle `js/webpack-jquery-bundle.js` dont le point d'entrée est `js/webpack-jquery-main.js` :

    npx webpack js/webpack-jquery-main.js js/webpack-jquery-bundle.js

