import { Component } from '@wordpress/element';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { select, dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { times } from 'lodash';
import { __ } from '@wordpress/i18n';

//--- Internals
import { Layouts } from './section-layout';
//--- Fichier SASS pour l'admin
//---   Permet d'être récupéré par Webpack avec la regex /admin\.s?([ac])ss$/
import './styles-admin.sass';
//--- Fichier SASS pour le Front-End
//---   Permet d'être récupéré par Webpack avec la regex /styles\.s?([ac])ss$/
import './styles.sass';

/******************************************
 * VARs
 ******************************************/
const { getBlocks } = select('core/block-editor');
const { replaceInnerBlocks } = dispatch( 'core/block-editor' );

/******************************************
 * ATTRIBUTES
 * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
 ******************************************/
const layoutDefault = [
    [12, 0, 4, 0, 0],
    [12, 0, 8, 0, 0]
];

export var blockAttributes = {
    className:  { type:'string' },
    type:       { type: 'string',
                  default: 'div' },
    fullWidth:  { type:'boolean',
                  default: false },
    columns:    { type:'number',
                  default: 2 },
    // layout:     { type:'array',
    //               default: layoutDefault },
    // settingLayout: {type: 'boolean', default: false}
};

/******************************************
 * COLUMNS BLOCK EDIT
 ******************************************/
export class editColumns extends Component {
    constructor() {
        super( ...arguments );

        this.ButtonType = this.ButtonType.bind( this );
        this.layoutBlocks = this.layoutBlocks.bind( this );
        this.setEtat = this.setEtat.bind( this );
        this.setLayout = this.setLayout.bind( this );

        //--- VAR STATE
        this.state = {  layout: false };
    }

    componentDidMount() {
        //do something
    }

    componentDidUpdate( prevProps ) {
        //do something
    }

    //--- Controls du type d'élément de la section
    //--- <DIV> ou <SECTION>
    ButtonType( {typeB} ) {
        const { setAttributes, attributes } = this.props;
        const { type } = attributes;

        let typeC = 'ized-section-type';
        if( type===typeB )
            typeC = 'ized-section-type active';
        return(
            <span   className={ typeC }
                    onClick={ ()=>setAttributes( {type:typeB} ) }
            >
                { typeB }
            </span>
        );
    }

    layoutBlocks( clientId ) {
        const { layout } = this.state;

        //--- Organise innerBlocks for column layout
        let innerBlocks = getBlocks(clientId);

        //--- TODO: supprimer les innerBlocks vides si le layout est plus "petit"
        console.log( innerBlocks );

        for (let i = 0; i < layout.length; i++) {
            if (innerBlocks[i] !== undefined) {
                innerBlocks[i].attributes.bootstrapSize = layout[i];
            } else {
                innerBlocks.push(
                    createBlock('ized-gutenberg/section-col', {bootstrapSize: layout[i]})
                );
            }
        }

        //--- supprimer les innerBlocks supplémentaires si ils sont vides.
        if( innerBlocks.length > layout.length ) {
            let splice = true;
            for( let i=layout.length; i<innerBlocks.length; i++ ) {

                //--- si un des blocks suivant contient qql chose, alors on ne supprime rien !
                if( innerBlocks[i].innerBlocks.length>0 )
                    splice = false;

            }
            if( splice )
                innerBlocks.splice( layout.length );
        }

        //--- mets à jour les innerBlocks selon le layout voulu
        replaceInnerBlocks(clientId, innerBlocks, false);

        this.setEtat( {layout: false} );
    }

    setEtat( obj ) {
        this.setState( obj );
    }

    setLayout( obj ) {
        this.props.attributes.columns = obj.columns;
        console.log( this );
        this.setState( obj );
    }

    render() {
        const {
            attributes,
            className,
            clientId,
            setAttributes
        } = this.props;

        const { layout } = this.state;
        const { columns, fullWidth } = attributes;
        const classes = className + ' ized-section-row';

        if( layout )
            this.layoutBlocks( clientId );

        return (
            <>
                <InspectorControls>
                    <PanelBody>

                        <div>Type d'élément :</div>
                        <div className='ized-section-type-container'>
                            <this.ButtonType typeB='div'/>
                            <this.ButtonType typeB='section'/>
                        </div>

                        <ToggleControl
                            label='Full Width'
                            checked={fullWidth}
                            onChange={(state) => setAttributes({fullWidth: state})}
                        />

                    </PanelBody>
                    <PanelBody title={__('Layout', 'ized-gutenberg')}>
                        <Layouts setLayout={ this.setLayout } />
                    </PanelBody>
                </InspectorControls>
                <div className={classes}>
                    <InnerBlocks
                        template={times(columns, () => ['ized-gutenberg/section-col'])}
                        templateLock="all"
                        allowedBlocks={['ized-gutenberg/section-col']}
                    />
                </div>
            </>
        );
    }
}

/******************************************
 * SECTION BLOCK SAVE
 ******************************************/
export function saveColumns(props) {
    const { fullWidth, type } = props.attributes;
    var classes = 'row';
    var TagName = 'div';

    if( fullWidth )
        classes = 'row full-width';

    if( type==='section' )
        TagName = 'section';

    return (
        <TagName className={ classes } >
            <InnerBlocks.Content />
        </TagName>
    );
}