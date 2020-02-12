import { Component } from '@wordpress/element';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, CheckboxControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/******************************************
 * VARs
 ******************************************/
const { getBlockCount } = select( 'core/block-editor' );

//--- mapping des Tailles Bootstrap
const sizeMap = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
};
const arrayMap = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
];

//--- Taille par défaut d'une nouvelle colonne
const defaultSizes = [
    12,     // XS
    0,      // SM
    6,      // MD
    0,      // LG
    0       // XL
];

/******************************************
 * ATTRIBUTES
 * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
 ******************************************/
export var colAttributes = {
    className: {type:'string'},
    bootstrapSize: {type: 'array', default: defaultSizes},
    bootstrapOffset: {type: 'array', default: [0,0,0,0,0]}
};

/******************************************
 * COLUMN BLOCK EDIT
 * en utilisant une class REACT
 * Component est l'équivalent à la class React.Component
 * avec des "ajouts" propres à Gutenberg
 * (ex: attributes, setAttributes)
 ******************************************/
export class ColEdit extends Component {
    constructor() {
        super( ...arguments );

        this.BootstrapSizeMenu = this.BootstrapSizeMenu.bind( this );
        this.setSize = this.setSize.bind( this );
        this.setEtat = this.setEtat.bind( this );

        //--- VAR STATE
        this.state = {  allSize: false,
                        allOrder: false };
    }

    componentDidMount() {
        //do something
    }

    componentDidUpdate( prevProps ) {
        //do something
    }

    setEtat( obj ) {
        this.setState( obj );
    }

    setSize( {size, col, type} ) {
        const { attributes, setAttributes } = this.props;
        const { bootstrapSize, bootstrapOffset } = attributes;
        var numSize, replace, newSize=[];

        switch( type ) {
            case 'col': replace = bootstrapSize; break;
            case 'order': replace = bootstrapOffset; break;
        }

        //--- retrouve le N° de mappage correspondant
        numSize = sizeMap[size];

        for(let i=0; i<replace.length; i++) {
            if( i===numSize )
                newSize.push(col);
            else
                newSize.push(replace[i]);
        }

        if( type==='col' )
            setAttributes( {bootstrapSize: newSize} );
        if( type==='order' )
            setAttributes( {bootstrapOffset: newSize} );
    }

    /**
     * affiche le menu déroulant pour la taille voulue,
     * autant pour gérer les class col-XX que order-XX de Bootstrap
     *
     * @param size      la taille pour laquelle est retournée le <SelectControl>
     *                  ['xs', 'md', 'xl'] par défaut
     *
     * @param type      le type de class bootstrap: COL ou ORDER
     *
     * @returns {*}     le menu avec l'icone de la taille et le <SelectControl> approprié
     */
    BootstrapSizeMenu( {size, type} ) {
        const { bootstrapSize, bootstrapOffset } = this.props.attributes;
        let numSize;
        let options = [
            {   label: 'auto',
                value: 0 }
        ];

        //--- retrouve le N° de mappage correspondant
        numSize = sizeMap[size];

        const value = type==='col' ? bootstrapSize[numSize] : bootstrapOffset[numSize];

        //--- construction des options sur 12 col
        //--- idem pour SIZE que ORDER
        for( let i=0; i<12; i++ ) {
            options.push(
                {   label: i+1,
                    value: i+1 }
            );
        }

        return (
            <div className={ 'ized-bootstrap-size' }>
                <div className={ 'ized-bootstrap-size-label' }>{ size }</div>
                <SelectControl
                    value={ value }
                    className={ 'ized-bootstrap-size-select' }
                    options={ options }
                    onChange={ (val) => this.setSize( {size:size, col:parseInt(val), type:type} ) }
                />
            </div>
        )
    }

    render() {
        const { clientId, setAttributes, attributes } = this.props;
        const { allSize, allOrder } = this.state;

        /**
         * Si ce bloc contient quelque chose (children)
         * recherche getBlockCount() en utilisant son propre cliendId
         */
        const hasChild = getBlockCount( clientId )>0;

        /**
         * Les tailles XL - MD - XS sont affichées par défaut (allSize==false)
         * Sinon afficher toutes les tailles (allSize==true)
         */
        var sizeArray  =  allSize ? [ 'xs', 'sm', 'md', 'lg', 'xl' ] : [ 'xs', 'md', 'xl' ];
        var orderArray = allOrder ? [ 'xs', 'sm', 'md', 'lg', 'xl' ] : [ 'xs', 'md', 'xl' ];

        return(
            <>
                <InspectorControls>
                    <PanelBody title={ __( 'Column Size' ) } >
                        { sizeArray.map( (size)=><this.BootstrapSizeMenu type={ 'col' } size={ size }/> ) }
                        <CheckboxControl
                            label='Toutes les tailles'
                            checked={ allSize }
                            onChange={ (val)=>this.setEtat( { allSize: val } ) }
                        />
                    </PanelBody>
                    <PanelBody title={ __( 'Column Order' ) } >
                        { orderArray.map( (size)=><this.BootstrapSizeMenu type={ 'order' } size={ size }/> ) }
                        <CheckboxControl
                            label='Toutes les tailles'
                            checked={ allOrder }
                            onChange={ (val)=>this.setEtat( { allOrder: val } ) }
                        />
                    </PanelBody>
                </InspectorControls>

               <div>
                   <InnerBlocks
                       templateLock={ false }
                       renderAppender={
                           hasChild
                               ? undefined
                               : () => <InnerBlocks.ButtonBlockAppender />
                       }
                   />
               </div>
            </>
        );
    }
}

/******************************************
 * HIGH ORDER COMPONENT
 * afin d'accéder au DOM racine du composant [BlockListBlock]
 * pour lui appliquer une class bootstrap.
 ******************************************/
export const HOCbootstrap = createHigherOrderComponent( ( BlockListBlock ) => {
    // console.log( BlockListBlock );
    return ( props ) => {
        if( props.name === 'ized-gutenberg/section-col' ) {
            const { attributes } = props;
            const { bootstrapSize, bootstrapOffset } = attributes;
            var className = '';

            if( bootstrapSize ) {
                className = 'col-md-'+bootstrapSize[2];
            }
            if( bootstrapOffset && bootstrapOffset[2]!==0 ) {
                className += ' order-md-'+bootstrapOffset[2];
            }

            return <BlockListBlock { ...props } className={ className } />;
        }
        else
            return <BlockListBlock { ...props } />;
    };
}, 'HOCbootstrap' );

/******************************************
 * COLUMNS BLOCK SAVE
 ******************************************/
export function saveColumn(props) {
    const { bootstrapSize, bootstrapOffset } = props.attributes;
    var classBlock = '';

    /**
     * Génère les class Bootstrap selon les attributs.
     *
     * @param bootstrapArray    bootstrapSize || bootstrapOffset
     * @param type              col- || order-
     */
    function setClass( bootstrapArray, type ) {
        bootstrapArray.map(
            (val, i) => {
                let prepend;
                if( val>0 ) {

                    //--- génère col-XX || order-XX pour la taille XS
                    //--- ou col-sm-XX || order-sm-XX en fonction des autres tailles
                    if( i==0 )
                        prepend = type;
                    else
                        prepend = type + arrayMap[i] +'-';

                    classBlock += ' '+ prepend + val;
                }
            }
        );
    }

    //--- construction de la class bootstrap
    setClass(bootstrapSize, 'col-' );
    setClass(bootstrapOffset, 'order-' );

    if( props.className )
        classBlock += ' '+props.className;

    return (
        <div className={ classBlock }>
            <InnerBlocks.Content />
        </div>
    );
}