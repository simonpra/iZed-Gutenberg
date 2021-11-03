import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { colAttributes, ColEdit, HOCbootstrap, saveColumn } from './col_HOOK';

/**
 * Enregistre le bloc pour son utilisation avec Gutenberg
 * Structure d'un bloc :
 * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
 */
registerBlockType( 'ized-gutenberg/section-col', {
    apiVersion: 2,

    title: __( 'Colonne', 'ized-gutenberg' ),

    /**
     * Spécifie un parent dans lequel le block pourra se glisser
     */
    parent: [ 'ized-gutenberg/section-row' ],

    description: __( 'Une colonne avec pleins de propriétés', 'ized-gutenberg' ),

    /**
     * OBJECT SVG ou tag Dashicons
     * https://developer.wordpress.org/resource/dashicons/
     */
    icon: 'archive',

    /**
     * Catégorie disponibles par défaut:
     *
     *   - common
     *   - formatting
     *   - layout
     *   - widgets
     *   - embed
     */
    category: 'layout',

    /**
     * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#supports-optional
     * Différentes options spécifiques aux composants Gutenberg
     */
    supports: {
        inserter: false,
        reusable: false,
        html: false,
        className: false
    },

    /**
     * Les attributs (props) utilisés par Gutenberg pour générer les BLOCKS
     * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
     */
    attributes: colAttributes,

    /**
     * Example provides structured example data (Attributes) for the block.
     * This data is used to construct a preview for the block to be shown
     * in the Inspector Help Panel when the user mouses over the block.
     */
    example: {},

    /**
     * La fonction edit(), c'est la fonction render() de REACT qui sera utilisée
     * pour l'affichage du BLOCK dans l'édition.
     *
     * @returns JSX DOM content
     */
    edit: ColEdit,

    /**
     * La fonction save(), c'est la fonction render() de REACT qui sera parsée
     * en HTML pour générer le code du POST/PAGE.
     *
     * @returns JSX DOM content
     */
    save: saveColumn
} );

/**
 * Ajoute un FILTER [HOCbootstrap] avec HighOrderComponent afin
 * d'accéder au DOM parent de 'ized-gutenberg/section-col'
 */
wp.hooks.addFilter( 'editor.BlockListBlock', 'ized-gutenberg/section-col', HOCbootstrap );