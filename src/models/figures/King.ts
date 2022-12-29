import {Figure, FigureNames} from "../../../../../Desktop/react-chess-master/src/models/figures/Figure";
import {Colors} from "../../../../../Desktop/react-chess-master/src/models/Colors";
import {Cell} from "../../../../../Desktop/react-chess-master/src/models/Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false;
    return true
  }
}