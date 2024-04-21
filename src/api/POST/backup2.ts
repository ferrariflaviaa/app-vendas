import RNFetchBlob from 'rn-fetch-blob';

interface IBackupDatabase {
  backup: string;
}

const backupDatabase = async ({ backup }: IBackupDatabase): Promise<boolean> => {
  try {
    if (!backup) {
      return false;
    }

    // Criar um objeto de formulário com o arquivo de backup
    const formData = [
      {
        name: 'backup',
        filename: 'nome_do_backup.db',
        data: RNFetchBlob.wrap(backup),
      },
    ];

    // Enviar o arquivo de backup para a rota da API
    await RNFetchBlob.fetch('POST', 'sua_rota_de_api', {
      'Content-Type': 'multipart/form-data',
    }, formData);

    console.log('Backup enviado com sucesso para a rota de API.');
    return true;
  } catch (error) {
    console.error('Erro ao enviar backup para a rota de API:', error);
    return false;
  }
};

export { backupDatabase };
