# Configuration du fichier webpack.config

Pour ne pas surcharger les _dependencies_ avec le repo @wordpress (env. 500Mo), 
ainsi que pour utiliser la version 5 de WEBPACK, création d'un fichier de config Webpack grandement inspiré de la config
_**@wordpress/scripts/config/webpack.config.js**_ avec explications :

### _Dependencies_

- `webpack : ^latest`

version **latest** ( _5.61.0 au 2021.11.2_ ) de WEBPACK pour profiter des dernières fonctionnalités !

- `babel-loader`

pour la conversion JSX en JS. Utiliser le preset
`presets: ["@wordpress/default"]` pour garder la compatibilité Wordpress...
 ...pas sûr ceci-dit, à regarder comment il s'installe et si il y a besoin
de `@wordpress/babel-preset-default`

- `@wordpress/dependency-extraction-webpack-plugin`

pour la conversion JSX en JS, et contient également les règles qui
convertissent les import `@wordpress/blocks` en variable JS `wp.blocks`

- `mini-css-extract-plugin`

pour extraire les fichiers CSS (SASS) importés dans les fichiers .JS <br>
ex: import './styles.css'; <br>
https://webpack.js.org/plugins/mini-css-extract-plugin/

### iZed-SASS
le fichier `./src/scripts/sass/ized-sass.js` a spécifiquement été créé afin
d'avoir plus de liberté dans la gestion des fichiers .SASS et .CSS

### Resources
- https://www.digitalocean.com/community/tutorials/js-create-custom-webpack-plugin

petit tutoriel d'introduction au fonctionnement des plugins webpack

- https://webpack.js.org/api/compiler-hooks/

liste des _HOOKS_ du compiler webpack. Celui qui m'intéresse semble être
`emit : Executed right before emitting assets to output dir.` qui permettrait
de spécifier un autre chemin de sortie pour le fichier CSS

- https://survivejs.com/webpack/extending/loaders/
