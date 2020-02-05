<?php
/**
 * Plugin Name: iZed Gutenberg Components
 * Plugin URI: https://github.com/simonpra/Gutenberg-Columns-Block
 * Description: This is a plugin demonstrating how to develop new blocks for the Gutenberg editor.
 * Version: 1.0
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

    $path_script = plugins_url( 'js/gutenberg.js', __FILE__ );

    wp_register_script(
        'ized-gutenberg',
        $path_script,
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        '1.0'
    );

    register_block_type( 'gutenberg-ized/section-column', array(
        'editor_script' => 'ized-gutenberg',    // doit correspondre au "handle" de wp_register_script()
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