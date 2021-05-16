import React from 'react';
import Box from 'Components/molecules/box';
import { PLAYERS } from 'Helpers/constant';

export type PossibleMoves = string[]
export type BoxDetail = {
  isBlackBox: boolean;
  pos: string;
  piece: string;
}
export type Board = {
  isBlackBox: boolean;
  pos: string;
  piece: string;
}
export type BoardAddress = {
  col: number,
  row: number
}

export interface IProps{
  getBoxDetail?: (boxDetail: BoxDetail, boardAddress: BoardAddress) => void;
  board?: Board[][];
  playerSide?: string;
  selectedPos?: string;
  possibleMoves?: PossibleMoves; // if piece on the box is undefined and it's includes in possibleMove, fill with the PossibleMoveIndicator component.
}

const Board = ({ getBoxDetail, playerSide, selectedPos = '', board }: IProps) => {
  return (
    <div className={`w-full flex flex-row justify-center items-center ${playerSide == 'b' && 'transform rotate-180'}`}>
      <div className='w-full bg-whisper grid grid-flow-row grid-cols-8 box-content select-none'>
        {board?.map((cols: Board[], col: number) => {
          return (
            cols.map((rows: Board, row: number) => {
              const isBlackBox = rows.isBlackBox;
              const pos = rows.pos;
              const piece = rows.piece;
              return (
                <Box
                  black={rows.isBlackBox}
                  key={rows.pos}
                  onClick={() => getBoxDetail && getBoxDetail({ isBlackBox, pos, piece }, { col, row })}
                  content={rows.piece}
                  selected={selectedPos == rows.pos}
                  rotate={playerSide == PLAYERS.BLACK}
                />
              );
            })
          );
        })}
      </div>
    </div>
  );
};

export default Board;
