# Gutenberg-Columns-Block
Un super bloc Gutenberg pour wordpress permettant d'utiliser les Colonnes de Bootstrap !

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
>contient les réglages "basiques" d'un container Wordpress et MySQL
>ainsi qu'un lien du dossier `./` avec le dossier `plugins/gutenberg` de wordpress
>pour un déploiement rapide du script Gutenberg.
>
>http://localhost:9999