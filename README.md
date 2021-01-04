# Gutenberg-Columns-Block
Un super bloc Gutenberg pour wordpress permettant d'utiliser les Colonnes de Bootstrap !
Environnement de développement largement inspiré de https://github.com/WordPress/gutenberg-examples

### devDependencies

**bootstrap 4.x**
>pour utiliser bootstrap

**dart-sass**
>pour compiler le SASS / SCSS en un seul fichier CSS. C'est aussi ce qui permet de retirer
>le strict minimum de `Boostrap`

**docker-compose.yml**
>contient les réglages "basiques" d'un container Wordpress et MySQL (MariaDB)
>ainsi qu'un lien du dossier `./build` avec le dossier `plugins/ized-gutenberg` de wordpress
>pour un déploiement rapide du script Gutenberg.
>
>Le container wordpress est construit à partir de l'image `wordpress:latest` en y ajoutant
>la library et configuration xDebug pour php.
> 
>Préparé pour xDebug 3. `PHP_XDEBUG_REMOTE_HOST: host.docker.internal` du fichier
>`docker-compose.yml` contient l'URL de connection pour lier xDebug à l'IDE.
>
>http://localhost

**package.json**
>Pour voir l'ensemble des dépendances, voir le fichier `package.json` et pour les
>installer `npm install`

**webpack.config.js**
> En attendant une meilleure version du Read-Me `webpack.md`, lire les commentaires
> du fichier `webpack.config.js` et du fichier `./scripts/sass/ized-sass.js`
> qui sert de "loader" SASS pour _webpack_