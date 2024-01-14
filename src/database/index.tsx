import { createTbUsuario } from "./TBUSUARIO/CREATE/createTbUsuario";
import { getDBConnection } from "./connection"

const executeCreateSqliteTables = async() => {
  const db = await getDBConnection();
  createTbUsuario(db);
}

export { executeCreateSqliteTables}