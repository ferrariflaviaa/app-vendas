import { SQLiteDatabase } from "react-native-sqlite-storage";
import { Vendedor } from "../../../types/vendedor";

interface IInsertTbVendedor extends Vendedor {
  db: SQLiteDatabase;
}

const insertTbVendedor = ({
  db,
  DFCPFCNPJ,
  DFEMAIL,
  DFIDATANASCIMENTO,
  DFLOGIN,
  DFNOME,
  DFSENHA,
  DFTELEFONE,
}: IInsertTbVendedor): Promise<number> => {
  const query = `
    INSERT INTO TBVENDEDOR(
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
      console.log('error propriedade ', error);
    }
  });
};

export { insertTbVendedor };
