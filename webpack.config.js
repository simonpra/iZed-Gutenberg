const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Extend la config @wordpress de Webpack pour lui ajouter
 * une gestion des fichiers IMPORT en SASS / SCSS ce qui
 * créera un fichier ized-gutenberg.css à importer dans le plugin.
 */
var config = require('@wordpress/scripts/config/webpack.config');

const isDevelopment = config.mode==='development';

/////////////////// SASS - SCSS - CSS ///////////////////
//--- https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/ ---//
//--- https://github.com/webpack-contrib/sass-loader/ ---//
const sassRules = {
    test: /\.s?([ac])ss$/,
    exclude: /\.module.(s([ac])ss)$/,
    loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        { loader: 'sass-loader',
            options: { sourceMap: false }
        }
    ]
};

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: isDevelopment ? 'ized-gutenberg.css' : 'ized-gutenberg.css',
    chunkFilename: isDevelopment ? '[id].css' : '[id].min.css'
});

config.module.rules.push(sassRules);
config.plugins.push( miniCssPlugin );

module.exports = config;