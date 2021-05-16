import React from 'react';
import Header from 'Components/molecules/header';
import FormGroup from 'Components/organisms/form-group';
import { generateInputGroup } from 'Helpers/common-helper';

export interface IProps {
  inputGroupKeys?: string[];
  headerTitle?: string;
  formLabel?: string;
  children?: React.ReactChild;
}

const Form = ({ inputGroupKeys, headerTitle, formLabel, children }: IProps) => {
  const initialInputGroup: any = generateInputGroup(inputGroupKeys as string[]);
  return (
    <div className='w-full h-full'>
      <Header
        title={headerTitle}
        fontSize='3xl'
        color='nero'
      />
      <FormGroup
        formLabel={formLabel}
        inputGroup={initialInputGroup}
      />
      <div className='w-full mx-auto text-center text-base mt-10'>{children}</div>
    </div>
  );
};

export default Form;
