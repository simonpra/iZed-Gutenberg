/**
 * Utilisation de NODE-SASS pour "compiler" le strict nécessaire de Bootstrap
 * Dépend de
 *      node-sass
 *      ./bootstrap.sass
 */
const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

//--- VARS
let fileName, fileExt, pathOutput, fileOutput;

/**
 * Réception de l'adresse du fichier passé en argument par ligne de commande
 *          node script.js argument_1
 *      process.argv[0]         // node (application)
 *      process.argv[1]         // path du script en cours (script.js)
 *      process.argv[2]         // premier argument passé (argument_1)
 */
let sassPath = process.argv[2];
let outputStyle = process.argv[3];

/**
 * Gestion du fichier en entrée selon arguments
 * et en sortie dans ../../css/ (./src/css/)
 */
if( sassPath===undefined ) {
    console.log( 'ERREUR : Pas de fichier en argument...' );
    process.exit(1);
}

//--- l'argument existe, récupère le nom du fichier
fileName = path.basename( sassPath );
fileExt  = path.extname(sassPath);

//--- n'est pas un fichier SASS | SCSS | CSS
if( !fileName.match(/.\.s?[ac]ss$/) ) {
    console.log( 'ERREUR : Mauvais fichier en argument...' );
    process.exit(1);
}

//--- le fichier n'existe pas
if( !fs.existsSync( sassPath ) ) {
    console.log( 'ERREUR : le fichier n\'existe pas'  );
    console.log( '        ' + sassPath );
    process.exit(1);
}

//--- ok, on continue...
pathOutput = path.resolve(__dirname, '../../css/');
fileOutput = path.resolve( pathOutput, fileName.replace(fileExt, '.css') );

/**
 * Gestion du outputStyle avec controle de la bonne valeur en argument
 *      ouputStyle = nested | expanded | compact | compressed
 */
if( outputStyle!==undefined && outputStyle.match(/nested|expanded|compact|compressed/i) ) {
    outputStyle = outputStyle.toLowerCase();
} else {
    outputStyle = 'expanded';
}

/**
 * Fonction pour résoudre les @import présent dans les SASS/SCSS
 * https://github.com/sass/node-sass#importer--v200---experimental
 *
 *   url (String) - the path in import as-is, which LibSass encountered
 *   prev (String) - the previously resolved path
 *   done (Function) - a callback function to invoke on async completion, takes an object literal containing
 *      file (String) - an alternate path for LibSass to use OR
 *      contents (String) - the imported contents (for example, read from memory or the file system)
 */
const importSass = function( url, prev, done ) {
    if( url.match(/^~/) ) {
        const module_path = './node_modules/';
        url = module_path + url.replace('~', '');
    }
    done( {file: url} );
};

/**
 * NODE-SASS
 * https://github.com/sass/node-sass
 */
sass.render({
    file: sassPath,
    importer: importSass,
    outFile: fileOutput,
    outputStyle: outputStyle // nested, expanded, compact, compressed
}, function(error, result) {
    if(!error) {
        // No errors during the compilation, write this result on the disk
        fs.writeFile(fileOutput, result.css, function (err) {
            if (!err) {
                console.log( 'bootstrap.css created with success in '+ result.stats.duration +'ms !' );
                console.log( '    ' + fileOutput );
            } else {
                console.log( err );
            }
        });
    } else {
        console.log( error );
    }
});