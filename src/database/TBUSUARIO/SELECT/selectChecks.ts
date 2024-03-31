import { SQLiteDatabase } from "react-native-sqlite-storage";
import { Vendedor } from "../../../types/vendedor";

interface ISelectChecks {
  db: SQLiteDatabase;
  DFCPFCNPJ: string;
}

const selectChecks = ({
  db,
  DFCPFCNPJ,
}: ISelectChecks): Promise<Vendedor> => {
  const query = `
    SELECT DFNOME, DFLOGIN, DFSENHA, DFIDATANASCIMENTO, DFEMAIL, DFTELEFONE, DFCPFCNPJ 
    FROM TBVENDEDOR 
    WHERE DFCPFCNPJ = ?;
`;
  return new Promise((resolve) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(query, [DFCPFCNPJ], (tx, results) => {
          if (results.rows.length > 0) {
            const list: Vendedor[] = results.rows.raw();
            resolve(list[0]);
            return list[0];
          }
          const list = null;
          resolve(list);
          return list;
        });
      });
    } catch (error) {}
  });
};

export { selectChecks };
