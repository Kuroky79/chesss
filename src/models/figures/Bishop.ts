import {Figure, FigureNames} from "../../../../../Desktop/react-chess-master/src/models/figures/Figure";
import {Colors} from "../../../../../Desktop/react-chess-master/src/models/Colors";
import {Cell} from "../../../../../Desktop/react-chess-master/src/models/Cell";
import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false;
    if(this.cell.isEmptyDiagonal(target))
      return true
    return false
  }
}