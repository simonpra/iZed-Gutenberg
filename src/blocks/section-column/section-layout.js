/******************************************
 * VARs LAYOUT
 * nb de col Bootstrap selon le schéma [ 'xs', 'sm', 'md', 'lg', 'xl' ]
 ******************************************/
const layoutsArray = [
    //--- 4 + 8
    [
        [12, 0, 4, 0, 0],
        [12, 0, 8, 0, 0]
    ],
    //--- 8 + 4
    [
        [12, 0, 8, 0, 0],
        [12, 0, 4, 0, 0]
    ],
    //--- 6 + 6
    [
        [12, 0, 6, 0, 0],
        [12, 0, 6, 0, 0]
    ],
    //--- [4 + 4 + 4]
    [
        [12, 0, 4, 0, 0],
        [12, 0, 4, 0, 0],
        [12, 0, 4, 0, 0]
    ],
    //--- [8 + 4] + [4 + 8]
    [
        [12, 0, 8, 0, 0],
        [12, 0, 4, 0, 0],
        [12, 0, 4, 0, 0],
        [12, 0, 8, 0, 0]
    ],

];

export function LayoutBlock( {layout, onClick} ) {
    return(
        <div className={ 'row ized-section-layout-row' } onClick={ ()=>onClick( layout ) }>
            { layout.map(
                (val) => <div className={ 'col-'+val[2]+' ized-section-layout-col' } />
            ) }
        </div>
    );
}

export function Layouts( {setLayout} ) {
    function layoutClick( layout ) {
        setLayout( { layout: layout, settingLayout: true } );
    }

    return(
        <div className={ 'ized-section-layout-container' }>
            { layoutsArray.map(
                (val) => {
                    return(
                        <div className={ 'ized-section-layout' }>
                            <LayoutBlock
                                layout={ val }
                                onClick={ layoutClick }
                            />
                        </div>
                    );
                }
            ) }
        </div>
    );
}