import { SQLiteDatabase } from "react-native-sqlite-storage";
import { Fornecedor } from "../../../types/fornecedor";

interface IInsertTbFornecedor {
  db: SQLiteDatabase;
  data: any;
}

const insertTbFornecedor = ({
  db,
  data,
}: IInsertTbFornecedor): Promise<number> => {
  const {
    DFCPFCNPJ,
    DFEMAIL,
    DFIDATANASCIMENTO,
    DFLOGIN,
    DFNOME,
    DFSENHA,
    DFTELEFONE,
  } = data.data[0];
  const query = `
    INSERT INTO TBFORNECEDOR (
      DFNOME,
      DFLOGIN,
      DFSENHA,
      DFIDATANASCIMENTO,
      DFEMAIL,
      DFTELEFONE,
      DFCPFCNPJ
    )
    VALUES (?,?,?,?,?,?,?);
`;
  return new Promise((resolver) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          query,
          [
            DFNOME,
            DFLOGIN,
            DFSENHA,
            DFIDATANASCIMENTO,
            DFEMAIL,
            DFTELEFONE,
            DFCPFCNPJ,
          ],
          (_, { insertId }) => {
            console.log(insertId);
            resolver(insertId);
            return insertId;
          },
          (error) => console.log("error: ", error)
        );
      });
    } catch (error) {
      console.log("error propriedade ", error);
    }
  });
};

export { insertTbFornecedor };
