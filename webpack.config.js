/**
 * MiniCssExtractPlugin
 * pour extraire les fichiers CSS (SASS) importés dans les fichiers .JS
 * ex: import './styles.css';
 *
 * https://webpack.js.org/plugins/mini-css-extract-plugin/
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @wordpress/dependency-extraction-webpack-plugin
 * PRESET WEBPACK / BABEL Wordpress pour Gutenberg
 * Évite d'inclure les "dependencies" qui sont disponibles
 * dans l'installation de Wordpress.
 *
 * Pour que le IMPORT @wordpress/xxx soit relatif à la variable WP.xxx
 * React, React.DOM, wp.blocks, etc... ne sont ainsi pas inclus,
 * et sont liés directement avec la variable JS disponible dans Wordpress
 *
 */
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

const path = require( 'path' );
const { resolve } = path;

const mode = 'production' // 'development'

/////////////////// SASS - SCSS - CSS ///////////////////
//--- https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/ ---//
//--- https://github.com/webpack-contrib/sass-loader/ ---//
const sassRules = {
    test: /\.s?([ac])ss$/,

    use: [
        //--- Enregistre le fichier CSS contenant l'ensemble des requêtes
        //--- du fichier JS
        MiniCssExtractPlugin.loader,
        //--- Récupère le CSS généré et exporté par le loader précédent ized-sass.js
        //--- et le prépare pour être accepté par MiniCssExtractPlugin
        'css-loader',
        //--- Loader spécifique [ized-sass.js] basé sur DART-SASS et POST-CSS
        //--- permettant de manipuler à notre guise les @import et autres
        //--- fichiers sources.
        {   loader: path.resolve( './src/scripts/sass/ized-sass.js' ) },
    ]
};

module.exports = {
    mode: mode,
    entry: resolve(__dirname, "src/index.js"),
    output: {
        path: resolve(__dirname, "build"),
        filename: "js/gutenberg.js"
    },

    /**
     * Section MODULES pris directement du fichier de configuration wordpress
     * @wordpress/scripts/config/webpack.config.js
     *
     * REQUIRE devDependencies : babel-loader
     * REQUIRE devDependencies : css-loader
     * REQUIRE devDependencies : mini-css-extract-plugin
     * REQUIRE devDependencies : @wordpress/babel-preset-default
     * REQUIRE devDependencies : @wordpress/dependency-extraction-webpack-plugin
     *
     */
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    //--- pour une optimisation des WORKERS
                    //--- https://webpack.js.org/loaders/thread-loader/
                    //--- Désactivé pour le moment... à voir l'optimisation que ça permet
                    // require.resolve( 'thread-loader' ),
                    {
                        loader: require.resolve( 'babel-loader' ),
                        options: {
                            // Babel uses a directory within local node_modules
                            // by default. Use the environment variable option
                            // to enable more persistent caching.
                            cacheDirectory:
                                process.env.BABEL_CACHE_DIRECTORY || true,

                            babelrc: false,
                            configFile: false,
                            presets: [ "@wordpress/default" ]
                        },
                    },
                ],
            },
            //--- LOADER-SASS
            sassRules,
        ],
    },

    /**
     * WEBPACK optimization.splitChunks.cacheGroups
     * permet de spécifier un "cacheGroups" pour les "STYLES"
     * afin d'extraire tous les fichiers SASS/CSS dans un seul fichier (chunks: 'all')
     * spécifiés par le [name] du cacheGroups.
     *
     * /!\ les fichiers destinés à l'admin doivent se terminer par admin.sass ou admin.css ou admin.scss
     * /!\ les fichiers destinés au front-end doivent se terminer par styles.sass ou styles.css ou styles.scss
     *
     * https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-all-css-in-a-single-file
     */
    optimization: {
        splitChunks: {
            cacheGroups: {
                admin: {
                    name: 'styles-admin',
                    test: /admin\.s?([ac])ss$/,
                    chunks: 'all',
                    enforce: true,
                },
                styles: {
                    name: 'styles',
                    test: /styles\.s?([ac])ss$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },

    plugins: [
        //--- injectPolyfill:true afin d'y inclure les Polyfills BABEL
        new DependencyExtractionWebpackPlugin( { injectPolyfill: true } ),
        //--- filename étant le chemin de sortie du fichier CSS qui sera "compilé"
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ]
};