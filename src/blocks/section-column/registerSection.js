import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { blockAttributes, editColumns, saveColumns } from './row';

/**
 * Enregistre le bloc pour son utilisation avec Gutenberg
 * Structure d'un bloc :
 * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
 */
registerBlockType( 'ized-gutenberg/section-row', {

    title: __( 'Section', 'ized-gutenberg' ),

    /**
     * OBJECT SVG ou tag Dashicons
     * https://developer.wordpress.org/resource/dashicons/
     */
    icon: 'layout',

    description: __( 'Une section pouvant recevoir divers colonnes pour agrémenter vos mise-en-page.', 'ized-gutenberg' ),

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
        html: false,
        className: false
    },

    /**
     * Les attributs (props) utilisés par Gutenberg pour générer les BLOCKS
     * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
     */
    attributes: blockAttributes,

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
    edit: editColumns,

    /**
     * La fonction save(), c'est la fonction render() de REACT qui sera parsée
     * en HTML pour générer le code du POST/PAGE.
     *
     * @returns JSX DOM content
     */
    save: saveColumns
} );