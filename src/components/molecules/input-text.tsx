import Input, { Value } from 'Components/atoms/input';
import React from 'react';

export interface IProps {
  label?: string;
  type?: 'text' | 'number'
  value?: Value;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: 'on' | 'off';
  isError?: boolean;
  errorMessage?: string;
  onChange?: (val: Value) => void;
  onFocus?: (evt: any) => void;
  onBlur?: (evt: any) => void;
  onKeyDown?: (evt: any) => void;
}

const InputText = ({
  label = 'input',
  value = '',
  type = 'text',
  disabled = false,
  required = false,
  autoComplete = 'off',
  isError = false,
  errorMessage = 'error message',
  onChange,
  onFocus,
  onBlur,
  onKeyDown
}: IProps) => {
  const generalStyle = 'w-full px-2 py-1 text-base text-zambesi border border-whisper focus:border-cyanBlue outline-none';
  const errorStyle = 'w-full px-2 py-1 text-base text-zambesi border border-redOrange focus:border-redOrange outline-none';
  return (
    <div className='w-full'>
      <div className='w-full space-y-1'>
        <h3 className='text-lg text-zambesi capitalize'>{label}</h3>
        <Input
          className={isError ? errorStyle : generalStyle}
          value={value}
          type={type}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          onChange={(evt: any) => onChange && onChange(evt.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      </div>
      {isError && <p className='text-redOrange text-sm'>{errorMessage}</p>}
    </div>
  );
};

export default InputText;
