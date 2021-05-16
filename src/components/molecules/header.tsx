import React from 'react';
import { ColorPalette, Sizes } from 'Helpers/constant';
import { textStyleFormat } from 'Helpers/common-helper';

export interface IProps{
  title?: string;
  fontSize?: Sizes;
  color?: ColorPalette;
}

const Header = ({ title, fontSize = 'base', color = 'nero' }: IProps) => {
  const titleStyle = [textStyleFormat(fontSize), textStyleFormat(color)].join(' ');
  return (
    <div className='w-full px-4 py-2 sticky top-0 shadow-bottom font-bold text-center'>
      <p className={titleStyle}>{title}</p>
    </div>
  );
};

export default Header;
