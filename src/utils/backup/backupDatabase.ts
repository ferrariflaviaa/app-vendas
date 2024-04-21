import { Dispatch, SetStateAction } from 'react';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

import Share from 'react-native-share';
interface IBackupDatabaseEnvio{
  setBackupStatus: Dispatch<SetStateAction<string>>
}
const backupDatabase = async ({setBackupStatus}:IBackupDatabaseEnvio) => {
  try {
    let dbPath;
    if (Platform.OS === 'android') {
      dbPath = `/data/data/com.appvendas/databases/vendas.db`;
    } else {
      dbPath = `${RNFS.DocumentDirectoryPath}/vendas.db`;
    }

    const backupDir = RNFS.ExternalDirectoryPath + '/Backup';
    await RNFS.mkdir(backupDir);

    const backupPath = `${backupDir}/vendas_backup.db`;
    await RNFS.copyFile(dbPath, backupPath);

    // Preparar o arquivo para compartilhamento
    const shareOptions = {
      title: 'Backup do Banco de Dados',
      url: `file://${backupPath}`,
      type: 'application/octet-stream',
    };

    // Compartilhar o arquivo
    try {
      const shareResponse = await Share.open(shareOptions);
      setBackupStatus('Backup compartilhado com sucesso!');
    } catch (shareError) {
      if (shareError.message === 'User did not share') {
        setBackupStatus('Compartilhamento cancelado pelo usuário.');
      } else {
        throw shareError; // Re-lança o erro se não for um cancelamento
      }
    }
  } catch (error) {
    setBackupStatus('Erro ao fazer backup do banco de dados.');
    console.error('Erro ao fazer backup do banco de dados:', error);
  }
};

export {backupDatabase}