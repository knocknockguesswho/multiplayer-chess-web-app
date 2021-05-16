import React from 'react';

export type Value = string | number;

export interface IProps {
  className?: string;
  value?: Value;
  type?: 'text' | 'number' | 'password'
  disabled?: boolean;
  required?: boolean;
  autoComplete?: 'on' | 'off';
  onChange?: (evt: any) => void;
  onFocus?: (evt: any) => void;
  onBlur?: (evt: any) => void;
  onKeyDown?: (evt: any) => void;
}

const Input = ({
  className,
  value = '',
  type = 'text',
  disabled = false,
  required = false,
  autoComplete = 'off',
  onChange,
  onFocus,
  onBlur,
  onKeyDown
}: IProps) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    ></input>
  );
};

export default Input;
