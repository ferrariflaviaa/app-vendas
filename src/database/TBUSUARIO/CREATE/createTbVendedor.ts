import { SQLiteDatabase } from "react-native-sqlite-storage";

const createTbVendedor = (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS TBVENDEDOR (
    DFIVENDEDOR INTEGER PRIMARY KEY AUTOINCREMENT,
    DFNOME VARCHAR(50) NOT NULL,
    DFLOGIN VARCHAR(12) NULL DEFAULT NULL,
    DFSENHA VARCHAR(12) NULL DEFAULT NULL,
    DFIDATANASCIMENTO DATE NOT NULL DEFAULT NULL,
    DFEMAIL VARCHAR(50) NOT NULL DEFAULT NULL,
    DFTELEFONE VARCHAR(50) NOT NULL DEFAULT NULL,
    DFCPFCNPJ VARCHAR(14) NOT NULL DEFAULT NULL
    );`;

    db.transaction(
      (tx) => {
        tx.executeSql(query, [], (_, results) => {
          if (results.rows.length >= 0) return true;
  
          return false;
        });
      },
      () => createTbVendedor(db),
    );
  
}

export{createTbVendedor};