import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps{
    cell: Cell
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell,selected,click}) => {
    return (
        <div className={['cell', cell.color, selected ? 'selected' : ''].join(' ')} onClick={()=>click(cell)}>
            {cell.figure?.logo && <img alt="" src={cell.figure.logo}/>}
        </div>
    );
};

export default CellComponent;
