import React from 'react';
import Board from 'Components/organisms/board';
import MoveHistory from 'Components/organisms/move-history';
import { cols, initialPos } from 'Helpers/constant';
import { getSelectedPos } from 'Helpers/common-helper';
import { GameHandler } from 'handlers/game-handler';
import { AuthHandler } from 'handlers/auth-handler';

type MoveHistories = { player: Array<any>, opponent: Array<any> };

const Game = () => {
  // page hooks
  const [board, setBoard] = React.useState<any>([]);
  const [address, setAddress] = React.useState([]);
  const [clickedBox, setClickedBox] = React.useState<any>([]);
  const [moveHistory, setMoveHistory] = React.useState<MoveHistories>({ player: [], opponent: [] });
  const tempClickedBox: any = clickedBox;
  const tempAddress: any = address;

  // custom hooks
  const { playerSide } = AuthHandler.usePlayer();
  const { loadBoard, checkPlayerTurn, generateMoveHistory } = GameHandler.useBoard();
  const validateMove = (box: any, addr: any) => {
    let isAccepted = true;
    // VALIDATE CLICK
    // 1. no movement when click on empty-box at first click *DONE*
    // 2. no movement when click on opponent's box at first click *DONE*
    // 3. make sure piece not move when player click on filled-by-their-own-piece box at second click. (mind the EXCEPTION for castle) *DONE*

    // FIRST CLICK
    if (tempClickedBox.length == 0) {
      if (!box.piece || !box.piece.includes(playerSide)) isAccepted = false; // 1 & 2
    }
    // SECOND CLICK
    if (tempClickedBox.length == 1) {
      if (box.piece && box.piece.includes(playerSide)) setClickedBox(tempClickedBox.shift()); // 3
    }
    // THEN
    if (isAccepted) {
      // 1. extend clicked box to clickedBox for generating move history.
      // 2. extend board address of movement for updating board
      setClickedBox(tempClickedBox.concat(box));
      setAddress(tempAddress.concat(addr));
    }
  };
  const generateMovement = () => {
    setMoveHistory({ ...moveHistory, player: generateMoveHistory(moveHistory.player, clickedBox) });
    setClickedBox([]);
    setAddress([]);
  };

  React.useEffect(() => {
    setBoard(loadBoard(initialPos, cols));
    console.log(checkPlayerTurn());
  }, []);

  React.useEffect(() => {
    if (clickedBox.length == 2) generateMovement();
  }, [clickedBox]);
  return (
    <div className='w-screen max-w-600px h-screen flex flex-col overflow-hidden'>
      <Board
        board={board}
        getBoxDetail={(box: any, addr: any) => validateMove(box, addr)}
        playerSide={playerSide}
        selectedPos={getSelectedPos(clickedBox)}
      />
      <MoveHistory
        playerCurrentMove={moveHistory.player}
        opponentCurrentMove={moveHistory.opponent}
      />
    </div>
  );
};

export default Game;
