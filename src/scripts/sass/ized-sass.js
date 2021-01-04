/**
 * Utilisation de DART-SASS pour "compiler" le SASS et ainsi
 * le strict nécessaire de Bootstrap, et autre...
 *
 * https://github.com/sass/dart-sass/blob/master/README.md#javascript-api
 */
const sass = require('sass');

/**
 * Utilisation de [autoprefixer] et [postcss] pour ajouter
 * des préfixes navigateurs au CSS.
 */
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

/**
 * Une fois le CSS généré par sass.renderSync(), utilise cette fonction pour
 * préfixer le css pour les différents navigateurs.
 * https://github.com/postcss/autoprefixer/
 * https://github.com/postcss/
 *
 *  // autoprefixer( {overrideBrowserslist: ['defaults']} )
 *  // ajoute la BrowserList 'defaults' à autoprefixer.
 *
 * Dépend de la liste des navigateurs spécifiés dans le fichier package.json :
 *   "browserslist": [
 *      "> 0.25%",
 *      "not dead"
 *   ]
 *
 */
const postCSS = function( css ) {
    return postcss([autoprefixer()]).process(css);
};

/**
 * Fonction pour résoudre les @import présent dans les SASS/SCSS
 * https://github.com/sass/node-sass#importer--v200---experimental
 *
 *   @param {string} url        - the path in import as-is, which LibSass encountered
 *   @param {string} prev       - the previously resolved path
 *   @param {string} context    - PATH du dossier en lecture
 *
 *   @return {object}           - takes an object literal containing
 *      {string} file           - an alternate path for LibSass to use OR
 *      {string} contents       - the imported contents (for example, read from memory or the file system)
 */
const importSass = function( url, prev, context ) {
    if( url.match(/^~/) ) {
        const module_path = './node_modules/';
        url = module_path + url.replace('~', '');
    } else {
        url = context+'/'+url;
    }
    return {file: url};
};

/**
 * Utilisation de DART SASS pour "compiler" le SASS,
 * avec ajouts spécifiques de certains préfixes navigateurs.
 *
 * Dépend de
 *      sass
 *      //--- pour  les préfixes des différents navigateurs ---//
 *      postcss
 *      autoprefixer
 *
 * @param {string} source   source du fichier SASS lut par webpack
 */

const izedSass = function( source ) {

    let context = this.context;
    const webpackCallback = this.callback;

    /** SI JAMAIS **
     *  let options = this.query;
     *  let resourcePath = this.resourcePath;
     *  let   outputPath = this._compiler.outputPath;
    */

    let result = sass.renderSync({
        data: source,
        indentedSyntax: true,       //--- par default "False"
        indentWidth: 4,
        linefeed: 'crlf',           //--- \r\n
        //--- Ajoute un CONTEXT à la fonction afin de pouvoir retourner
        //--- un chemin valide.
        importer: (url, prev) => importSass( url, prev, context ),
        outputStyle: "compressed", //--- "expanded" | "compressed"
        // includePaths: [ './src/' ],
    });

    //--- POST-CSS et AUTOPREFIXER
    result = postCSS( result.css );

    webpackCallback( null, result.css );

    return null;
};

exports.default = izedSass;