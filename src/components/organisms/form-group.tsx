import React from 'react';
import InputText from 'Components/molecules/input-text';
import { convertObjectKeyToString } from 'Helpers/common-helper';
import Button from 'Components/atoms/button';

export type InputGroup = {
  [args: string]: {
    value: string | number,
    isError: boolean,
    errorMessage: string
  }
};

export interface IProps {
  formLabel?: string;
  inputGroup?: InputGroup[];
}

const FromGroup = ({
  formLabel = 'Signup',
  inputGroup,
}: IProps) => {
  // need form validation
  const [updatedInputGroup, setUpdatedInputGroup] = React.useState<any>(inputGroup);
  const handleOnchange = (val: any, idx: number, fieldName: string) => {
    const tempInputGroup: any = updatedInputGroup;
    tempInputGroup[idx][fieldName].value = val;
    setUpdatedInputGroup({ ...updatedInputGroup, tempInputGroup });
  };
  return (
    <div className='w-full h-full px-4'>
      <div className='w-full pt-8 space-y-4 mb-14'>
        <h3 className='text-2xl text-zambesi font-bold'>{formLabel}</h3>
        <div className='w-full space-y-4 mb-14'>
          {inputGroup?.map((row: any, idx: number) => {
            const objKey = convertObjectKeyToString(row);
            return (
              <InputText
                key={idx}
                type={row[objKey].type}
                label={objKey}
                value={row[objKey].value}
                onChange={(val: any) => handleOnchange(val, idx, objKey)}
              />
            );
          })}
        </div>
      </div>
      <Button
        label='Submit'
        size='lg'
      />
    </div>
  );
};

export default FromGroup;
