import { createBlock } from '@wordpress/blocks';
import { useState } from '@wordpress/element';
import { InnerBlocks, InspectorControls, BlockControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, CheckboxControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { select, dispatch, useDispatch } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/******************************************
 * VARs
 ******************************************/
const {
    getBlockCount,
    getBlockRootClientId,
    getBlocks,
    getBlockAttributes
} = select( 'core/block-editor' );
const {
    replaceInnerBlocks,
    updateBlockAttributes
} = dispatch( 'core/block-editor' );

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
    12,         // XS
    'auto',     // SM
    6,          // MD
    'auto',     // LG
    'auto'      // XL
];

/******************************************
 * ATTRIBUTES
 * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
 ******************************************/
export var colAttributes = {
    className: {type:'string'},
    bootstrapSize: {type: 'array', default: defaultSizes},
    bootstrapOffset: {type: 'array', default: ['auto','auto','auto','auto','auto']}
};

/******************************************
 * affiche le menu déroulant pour la taille voulue,
 * autant pour gérer les class col-XX que order-XX de Bootstrap
 *
 * @param size              la taille pour laquelle est retournée le <SelectControl>
 *                          ['xs', 'md', 'xl'] par défaut
 *
 * @param value             la valeure actuellement choisie (autant pour COL- que ORDER-
 * @param bootstrapArray
 * @param setAttributes     le setAttributes de Gutenberg
 * @param type              le type de class bootstrap: COL ou ORDER
 *
 * @returns {*}     le menu avec l'icone de la taille et le <SelectControl> approprié
 ******************************************/
const BootstrapSizeMenu = ( {size, value, bootstrapArray, setAttributes, type} ) => {
    let options = [
        {   label: 'auto',
            value: 'auto' }
    ];

    //--- construction des options sur 12 col
    //--- idem pour SIZE que ORDER
    for( let i=0; i<=12; i++ ) {
        options.push(
            {   label: i,
                value: i }
        );
    }

    return (
        <div className={ 'ized-bootstrap-size' }>
            <div className={ 'ized-bootstrap-size-label' }>{ size }</div>
            <SelectControl
                value={ value }
                className={ 'ized-bootstrap-size-select' }
                options={ options }
                onChange={ (val)=> {
                    let returnArray = [];
                    for( let i=0; i<bootstrapArray.length; i++ )
                        returnArray[i] = ( i===sizeMap[size] ) ? val : bootstrapArray[i];
                    setAttributes({ ['bootstrap'+type] : returnArray } );
                } }
            />
        </div>
    )
}

/******************************************
 * COLUMN BLOCK EDIT
 * en utilisant une class REACT
 * Component est l'équivalent à la class React.Component
 * avec des "ajouts" propres à Gutenberg
 * (ex: attributes, setAttributes)
 ******************************************/
export const ColEdit = ( props ) => {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
    } = props;
    const { bootstrapSize, bootstrapOffset } = attributes;
    const blockProps = useBlockProps();

    const { removeBlock } = useDispatch('core/block-editor');

    const [allSize, setAllSize]   = useState(false);
    const [allOrder, setAllOrder] = useState(false);

    /**
     * Si ce bloc contient quelque chose (children)
     * recherche getBlockCount() en utilisant son propre cliendId
     */
    const hasChild = getBlockCount( clientId )>0;

    /**
     * Les tailles XL - MD - XS sont affichées par défaut (allSize==false)
     * Sinon afficher toutes les tailles (allSize==true)
     */
    const sizeArray  =  allSize ? [ 'xs', 'sm', 'md', 'lg', 'xl' ] : [ 'xs', 'md', 'xl' ];
    const offsetArray = allOrder ? [ 'xs', 'sm', 'md', 'lg', 'xl' ] : [ 'xs', 'md', 'xl' ];

    const ReturnArray = ({mapArray, bootstrapArray, type})=> {
        let vals = [];
        for (let i = 0; i < mapArray.length; i++) {
            //--- retrouve le N° de mappage correspondant
            let size = mapArray[i];
            let numSize = sizeMap[size];
            let value = bootstrapArray[numSize];
            vals.push(<BootstrapSizeMenu size={size} value={value} bootstrapArray={bootstrapArray} type={type} setAttributes={setAttributes}/>);
        }
        return vals;
    };

    const removeAddCol = (clientId, action) => {
        // Get root element COLUMNS
        const rootId = getBlockRootClientId(clientId);
        let   rootCols = getBlockCount( rootId );

        //--- Récupère les ATTRIBUTES du BlockRoot ROW
        let blockRootAttrs = getBlockAttributes(rootId);
        //--- Récupère les innerBlocks du BlockRoot
        let innerBlocks = getBlocks(rootId);

        ( action==='add' ) ? rootCols++ : rootCols--;
        blockRootAttrs.columns = rootCols;

        if(rootCols===0) {
            removeBlock(rootId);
        } else {
            for( let i=0; i<innerBlocks.length; i++ ) {
                if( innerBlocks[i].clientId === clientId ) {
                    if( action==='add' ) {
                        innerBlocks.splice(
                            i+1, 0,
                            createBlock('ized-gutenberg/section-col', {bootstrapSize: defaultSizes})
                        );
                    } else
                        innerBlocks.splice(i, 1);
                    //--- l'action sur la colonne [clientId] est effectuée
                    //--- on peut sortir de la boucle
                    break;
                }
            }
            //--- mets à jour les innerBlocks selon le layout voulu
            replaceInnerBlocks(rootId, innerBlocks, false);
            //--- mettre à jour également le nombre de colonnes que contient le parent
            updateBlockAttributes( rootId, blockRootAttrs );
        }
    };

    return (
        <>
            <div {...blockProps}>
                <InnerBlocks
                    templateLock={ false }
                    renderAppender={
                        hasChild
                            ? null
                            : () => <InnerBlocks.ButtonBlockAppender />
                    }
                />
            </div>
            <InspectorControls>
                <PanelBody title={ __( 'Column Size' ) } >
                    <ReturnArray mapArray={sizeArray} bootstrapArray={bootstrapSize} type={'Size'} />
                    <CheckboxControl
                        label='Toutes les tailles'
                        checked={ allSize }
                        onChange={ (val)=>setAllSize(val) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Column Order' ) } >
                    <ReturnArray mapArray={offsetArray} bootstrapArray={bootstrapOffset} type={'Offset'} />
                    <CheckboxControl
                        label='Toutes les tailles'
                        checked={ allOrder }
                        onChange={ (val)=>setAllOrder(val) }
                    />
                </PanelBody>
            </InspectorControls>

            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={ 'minus' }
                        label={ __('supprimer la colonne') }
                        onClick={ ()=>removeAddCol(clientId, 'remove') }
                        className={ '' }
                    />
                    <ToolbarButton
                        icon={ 'plus' }
                        label={ __('ajouter une colonne') }
                        onClick={ ()=>removeAddCol(clientId, 'add') }
                        className={ '' }
                    />
                </ToolbarGroup>
            </BlockControls>
        </>
    );
};

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
            let className = '';

            if( bootstrapSize && (bootstrapSize[2]!=='auto' || bootstrapSize[2]!==0) )
                className = 'col-md-'+bootstrapSize[2];

            if( bootstrapOffset && (bootstrapOffset[2]!=='auto' || bootstrapOffset[2]!==0) )
                className += ' order-md-'+bootstrapOffset[2];

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
    let classBlock = '';

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
                if( val!=='auto' && !(val===0 && type==='col-') ) {

                    //--- génère col-XX || order-XX pour la taille XS
                    //--- ou col-sm-XX || order-sm-XX en fonction des autres tailles
                    if( i===0 )
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