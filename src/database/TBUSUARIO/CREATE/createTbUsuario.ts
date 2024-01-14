import { SQLiteDatabase } from "react-native-sqlite-storage";

const createTbUsuario = (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS TBUSUARIO (
    DFIUSUARIO INTEGER PRIMARY KEY AUTOINCREMENT,
    DFNOME VARCHAR(50) NOT NULL,
    DFSENHA INTERGER(11) NULL DEFAULT NULL,
    DFIDATANASCIMENTO DATE NOT NULL DEFAULT NULL
    );`;

    db.transaction(
      (tx) => {
        tx.executeSql(query, [], (_, results) => {
          if (results.rows.length >= 0) return true;
  
          return false;
        });
      },
      () => createTbUsuario(db),
    );
  
}

export{createTbUsuario};