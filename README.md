# JavaScript jQuery

## Installer les dépendances

Pour installer les dépendances spécifiées dans le fichier `package.json` :

    npm install

## Installer jQuery

Pour installer jQuery :

    npm install jquery

## Installer Bootstrap

Pour installer Bootstrap 3 :

    npm install bootstrap@3.3.7

Pour installer Bootstrap 4 :

    npm install bootstrap

## Installer Webpack

Pour installer Webpack :

    npm install webpack

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

