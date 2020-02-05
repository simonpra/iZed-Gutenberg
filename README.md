# Gutenberg-Columns-Block
Un super bloc Gutenberg pour wordpress permettant d'utiliser les Colonnes de Bootstrap !
Environnement de développement largement inspiré de https://github.com/WordPress/gutenberg-examples

### devDependencies

**bootstrap 4.4.1**
>pour utiliser bootstrap

**node-sass**
>pour compiler le SASS / SCSS en un seul fichier CSS. C'est aussi ce qui permet de retirer
>le strict minimum de `Boostrap`

**@wordpress/components**
>comprend les composants principaux de Gutenberg ce qui permet de les utiliser avec `@import`
>et d'avoir les fonctions en mode `DEBUG`
>
>https://github.com/WordPress/gutenberg/tree/master/packages/components

**@wordpress/scripts**
>utilitaires et configurations nécessaires pour le développement et déploiement Gutenberg / Wordpress
>
>https://github.com/WordPress/gutenberg/tree/master/packages/scripts
>
>_(un peu lourd... >500Mo, y a surement moyen d'optimiser ça en ne prenant que les configs webpack + babel)_

**docker-compose.yml**
>contient les réglages "basiques" d'un container Wordpress et MySQL (MariaDB)
>ainsi qu'un lien du dossier `./build` avec le dossier `plugins/ized-gutenberg` de wordpress
>pour un déploiement rapide du script Gutenberg.
>
>Le container wordpress est construit à partir de l'image `wordpress:latest` en y ajoutant
>la library et configuration xDebug pour php. Clé IDE pour xDebug: `XDEBUG_KEY`
>
>http://localhost