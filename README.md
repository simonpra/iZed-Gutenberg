# Gutenberg-Columns-Block
Un super bloc Gutenberg pour wordpress permettant d'utiliser les Colonnes de Bootstrap !

###devDependencies
**bootstrap 4.4.1**
>pour utiliser bootstrap

**babel**
>pour configurer Babel correctement afin de convertir le JSX et ES6
>>`@babel/cli`
>>`@babel/core`
>>`@babel/plugin-syntax-dynamic-import`
>>`@babel/register`
>>`babel-loader`
>>`core-js`
>
>presets Babel pour travailler correctement avec le JSX et Gutenberg
(converti le `import { Dropdown } from '@wordpress/Components'` en `const Dropdown = wp.components.Dropdown` par exemple)
>>`@babel/plugin-syntax-dynamic-import`
>>`@babel/plugin-proposal-class-properties`
>>`@babel/preset-env`
>>`@wordpress/babel-preset-default`
>>`babel-preset-minify`

**Webpack**
> pour "compiler" le JSX, ES6, SCSS, SASS, LESS et différents formats
>et fournir les fichiers correspondants
>>`webpack`
>>`webpack-cli`
>>`request`
>
> avec différents "Plugins" nécessaires pour bien travailler avec Gutenberg
>>`@wordpress/dependency-extraction-webpack-plugin`
>>`css-loader`
>>`file-loader`
>>`mini-css-extract-plugin`
>>`node-sass`
>>`sass-loader`
>>`style-loader`

**browsersList**
> syntax pour convertir les instructions CSS/JS vers les navigateurs concernés