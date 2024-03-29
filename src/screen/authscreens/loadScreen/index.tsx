import React from 'react';
import { ActivityIndicator, Text } from 'react-native';

import { Container } from '../../../components/global';
import { vendasContext } from '../../../context/context';

export const LoadScreenAuth = () => {
  const { loadSellerMessage } = vendasContext();

  return (
    <Container>
      <ActivityIndicator size="large" color="grey" />
      <Text>{loadSellerMessage || 'Sincronizando dados...'}</Text>
    </Container>
  );
};
