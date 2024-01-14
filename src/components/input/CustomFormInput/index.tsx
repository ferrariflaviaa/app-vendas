import { TextInputProps } from 'react-native';

import { ContainerInput, CustomTextInput } from './styles';
import { returnIconCustomFormInput } from './utils';

interface ICustomDataInputProps extends TextInputProps {
  type?: 'USERS' | 'SECRET' | 'TOKEN';
}

export const CustomFormInput = ({ type, ...rest }: ICustomDataInputProps) => (
  <ContainerInput>
    {returnIconCustomFormInput(type)}
    <CustomTextInput {...rest} />
  </ContainerInput>
);
