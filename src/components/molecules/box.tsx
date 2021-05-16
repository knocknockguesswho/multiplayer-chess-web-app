import React from 'react';
import { getPiecesImage } from 'Helpers/common-helper';

export interface IProps{
  black?: boolean;
  onClick?: () => void;
  content?: string;
  rotate?: boolean;
  selected?: boolean;
}

const Box = ({ black = false, onClick, content, rotate = false, selected = false }: IProps) => {
  const boxSize = (document.body.children[0].clientWidth / 8) + 'px';
  const PieceImage: React.ReactElement = (
    <img
      className={`object-cover w-full h-full ${rotate && 'transform rotate-180'}`}
      src={getPiecesImage(content as string)}
    />
  );
  return (
    <div
      className={`flex justify-center items-center cursor-pointer overflow-hidden relative ${black ? 'bg-green-600' : 'bg-yellow-200'} ${selected ? 'selected' : ''}`}
      style={{ width: boxSize, height: boxSize }}
      onClick={onClick}
    >
      {content ? PieceImage : null}
    </div>
  );
};

export default Box;
