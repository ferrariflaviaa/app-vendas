import { Platform } from "react-native";
import RNFS from 'react-native-fs';
import { backupDatabaseApi } from "../../api/POST/envioBackup";
import { Dispatch, SetStateAction } from "react";

interface IBackupDatabaseEnvio{
  setBackupStatus: Dispatch<SetStateAction<string>>
}
const backupDatabaseEnvio = async ({setBackupStatus}:IBackupDatabaseEnvio) => {
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
    //Transformar em base64
    // const backupContent = await RNFS.readFile(backupPath, 'base64');

    // Enviar o arquivo de backup para a rota da API
    const sucesso = await backupDatabaseApi({ backup: backupPath });
    console.log(backupPath)
    setBackupStatus('Backup realizado com sucesso!');

    // compartilharArquivo(backupPath);
    
  } catch (error) {
    setBackupStatus('Erro ao fazer backup do banco de dados.');
    console.error('Erro ao fazer backup do banco de dados:', error);
  }
  
};

export {backupDatabaseEnvio}