import { SQLiteDatabase } from "react-native-sqlite-storage";

interface IInsertTbArmazenamentoProdutor {
  db: SQLiteDatabase;
}

const insertTbUsuario = ({db}:IInsertTbArmazenamentoProdutor):Promise<number> => {

const query = `
    INSERT INTO TBARMAZENAMENTOPRODUTOR(
    DFNOME,
    DFSENHA,
    DFIDATANASCIMENTO
    )
    VALUES (?,?,?);
`
return new Promise((resolver) => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, { insertId }) => {
          resolver(insertId);
          return insertId;
        },
        (error) => console.log("error: ", error),
      );
    });
  } catch (error) {
    // console.log('error propriedade ', error);
  }
});
};


export {insertTbUsuario}