import React from 'react';
import { Container, CustomItemTitle, } from './styles';
import { CustomInformSellerItem } from './CustomInformSellerItem';
import { Title } from './styles';

interface ICustomInformSeller{
  Nome: string;
  CPFCNPJ: string;
  Email: string;
  DataNascimento: string;
}

interface ICustomInformSellerProps {
  data:ICustomInformSeller;
}

export const CustomInformSeller = ({data}: ICustomInformSellerProps) => {
  const {CPFCNPJ,DataNascimento,Email, Nome} = data;
  return (
    <Container>
      <Title>Informação Vendedor</Title>
      <CustomInformSellerItem title="Nome" type={Nome}/>
      <CustomInformSellerItem title="CPFCNPJ" type={CPFCNPJ}/>
      <CustomInformSellerItem title="Email" type={Email}/>
      <CustomInformSellerItem title="DataNascimento" type={DataNascimento}/>
    </Container>
  );
};
