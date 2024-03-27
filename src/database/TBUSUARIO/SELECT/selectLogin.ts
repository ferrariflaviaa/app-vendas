import { SQLiteDatabase } from "react-native-sqlite-storage";
import { TypeTbUsuario } from "../../../types/typeTbUsuario";

interface ISelectLogin extends TypeTbUsuario{
  db: SQLiteDatabase;
  
}

const selectLogin = ({db, DFLOGIN, DFSENHA}:ISelectLogin):Promise<TypeTbUsuario> => {

const query = `
    SELECT NOME, DFSENHA FROM  TBUSUARIO WHERE NOME = ? AND DFSENHA = ?;
`
return new Promise((resolver) => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [DFLOGIN, DFSENHA],
        (_, results) => {
          if(results.row.raw()){
            resolver(results.row.raw());
            return results.row.raw();

          }
        },
        (error) => console.log("error: ", error),
      );
    });
  } catch (error) {
    // console.log('error propriedade ', error);
  }
});
};


export {selectLogin}