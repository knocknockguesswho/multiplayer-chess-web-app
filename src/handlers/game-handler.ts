import { setupBoard } from 'Helpers/piece-move-helper';

export class GameHandler {
  public static useBoard() {
    const loadBoard = (initialPos: any, cols: any) => {
      return setupBoard(cols, initialPos);
    };
    const checkPlayerTurn = () => {
      const isPlayerTurn = true;
      return isPlayerTurn;
    };
    const generateMoveHistory = (move: any, clickedBox: any) => {
      const movementDetail = move;
      return movementDetail.concat({ movement: clickedBox[0].pos + clickedBox[1].pos, piece: clickedBox[0].piece });
    };
    return { loadBoard, checkPlayerTurn, generateMoveHistory };
  }
}
