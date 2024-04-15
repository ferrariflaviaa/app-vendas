import { createTbFornecedor } from "./TBFORNECEDOR/CREATE/createTbFornecedor";
import { createTbVendedor } from "./TBUSUARIO/CREATE/createTbVendedor";
import { getDBConnection } from "./connection"

const executeCreateSqliteTables = async() => {
  const db = await getDBConnection();
  createTbVendedor(db);
  createTbFornecedor(db);
}

export { executeCreateSqliteTables}