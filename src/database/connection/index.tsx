import { openDatabase } from 'react-native-sqlite-storage';

export const getDBConnection = async () => {
  return openDatabase({ name: 'vendas.db', location: 'default' });
};
