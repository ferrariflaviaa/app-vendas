import { VENDA_API } from '..';



interface IBackupDatabase {
  backup: string;
}

const backupDatabaseApi = async ({
  backup,
}: IBackupDatabase): Promise<boolean> => {


  return new Promise(resolve => {
    if (backup) {
      try {
        return VENDA_API.post(`/backup/criar`, backup)
          .then(_ => {
            resolve(true);
            return true;
          })
          .catch(_ => {
            resolve(true);
            return true;
          });
      } catch (_) {
        resolve(false);
        return false;
      }
    } else {
      resolve(true);
      return true;
    }
  });
};

export { backupDatabaseApi };
