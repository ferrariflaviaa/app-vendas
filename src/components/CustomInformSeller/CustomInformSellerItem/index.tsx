import React from 'react';

import { CustomItemTitle } from './styles';

interface ICustomInformSellerItem {
  title: string;
  type: string;
}
export const CustomInformSellerItem = ({
  title,
  type,
}: ICustomInformSellerItem) => {
  return (
    <CustomItemTitle isPrimary={true}>
      {title}: <CustomItemTitle isPrimary={false}>{type}</CustomItemTitle>
    </CustomItemTitle>
  );
};
