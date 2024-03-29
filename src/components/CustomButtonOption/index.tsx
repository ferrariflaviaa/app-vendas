import React, { ReactNode } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import {
  ContainerCustomButtonOption,
  ContentCustomButtonOption,
  CustomButtonOptionText,
  CustomContainerIcon,
} from "./styles";

type ICustomButtonOptionProps = RectButtonProps & {
  title: string;
  iconButton?: ReactNode;
};

export const CustomButtonOption = ({
  title,
  ...rest
}: ICustomButtonOptionProps) => {
  return (
    <ContainerCustomButtonOption>
      <ContentCustomButtonOption>
        {/* <CustomContainerIcon>{iconButton}</CustomContainerIcon> */}
        <CustomButtonOptionText>{title}</CustomButtonOptionText>
      </ContentCustomButtonOption>
    </ContainerCustomButtonOption>
  );
};
