import React from 'react';
import { Sizes } from 'Helpers/constant';

export interface IProps {
  label?: string;
  size?: Sizes;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ label, size = 'base', disabled, onClick }: IProps) => {
  return (
    <div
      className={`p-2 font-bold rounded-md text-white text-center cursor-pointer hover:bg-opacity-75 text-${size} bg-${disabled ? 'nobel' : 'nero'}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
