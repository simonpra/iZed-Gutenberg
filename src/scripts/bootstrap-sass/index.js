/**
 * Utilisation de NODE-SASS pour "compiler" le strict nécessaire de Bootstrap
 * Dépend de
 *      node-sass
 *      ./bootstrap.sass
 */
const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './bootstrap.sass');
const fileOutput = path.resolve(__dirname, '../../css/bootstrap.css');

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
    file: file,
    importer: importSass,
    outFile: fileOutput,
    outputStyle: 'expanded' // nested, expanded, compact, compressed
}, function(error, result) {
    // node-style callback from v3.0.0 onwards
    if(!error) {
        // No errors during the compilation, write this result on the disk
        fs.writeFile(fileOutput, result.css, function (err) {
            if (!err) {
                console.log( 'bootstrap.css created with success in '+ result.stats.duration +'ms !' );
            } else {
                console.log( err );
            }
        });
    } else {
        console.log( error );
    }
});