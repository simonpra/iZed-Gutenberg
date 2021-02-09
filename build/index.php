<?php
/**
 * Plugin Name: iZed Gutenberg Components
 * Plugin URI: https://github.com/simonpra/Gutenberg-Columns-Block
 * Description: This is a plugin demonstrating how to develop new blocks for the Gutenberg editor.
 * Version: 0.1-alpha
 * Author: Fabulous iZed Team
 *
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 * TODO
 */

//add_action( 'init', 'gutenberg_ized_load_txtdomain' );
function gutenberg_ized_load_txtdomain() {
    load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_ized_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    //--- PATH vers le fichier BUILD du block
    $path_script = plugins_url( 'js/gutenberg.js', __FILE__ );
    $path_script_php = plugin_dir_path(__FILE__).'js/gutenberg.asset.php';

    //--- Récupère les DEPENDENCIES du BLOCK
	$asset_file = include( $path_script_php );

    wp_register_script(
        'ized-gutenberg',
        $path_script,
	    $asset_file['dependencies'],
        '1.0'
    );

    //--- Fichier CSS de l'affichage du/des blocks dans l'admin
	$url_css = plugins_url( 'css/styles-admin.css', __FILE__ );
	wp_enqueue_style( 'ized-bootstrap', $url_css, array(), '1.0' );

    //---- OPTIONNEL pour les block n'utilisant que JS / REACT
	//---- à utiliser principalement avec 'render_callback' afin
	//---- d'avoir un traitement PHP (serveur) du block
	//---- spécifiquement pour des blocks dynamiques
    register_block_type( 'gutenberg-ized/section-column', array(
        'editor_script' => 'ized-gutenberg',    // doit correspondre au "handle" de wp_register_script()
	    // 'render_callback' => 'callback_function'
    ) );

    if ( function_exists( 'wp_set_script_translations' ) ) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         * TODO
         */
        //wp_set_script_translations( 'gutenberg-examples-01', 'gutenberg-examples' );
    }

}
add_action( 'admin_init', 'gutenberg_ized_register_block' );

function gutenberg_ized_frontend() {

	//--- Fichier CSS de style à charger sur le FrontEnd
	$url_css = plugins_url( 'css/styles.css', __FILE__ );
	wp_enqueue_style( 'ized-frontend', $url_css, array(), '1.0' );
}
add_action( 'wp_enqueue_scripts', 'gutenberg_ized_frontend' );