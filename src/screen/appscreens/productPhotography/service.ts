import { Dispatch, SetStateAction } from "react";
import { selectChecks } from "../../../database/TBUSUARIO/SELECT/selectChecks";
import { getDBConnection } from "../../../database/connection";
import { HomeProps } from "../../../routes/types/approutes/appscreen";
import { Vendedor } from "../../../types/vendedor";

interface IHandleChecks {
  DFCPFCNPJ: string;
  setSeller: Dispatch<SetStateAction<Vendedor>>
}

const handleChecks  = async({ DFCPFCNPJ, setSeller }: IHandleChecks) => {
  const db = await getDBConnection();
  selectChecks({db, DFCPFCNPJ}).then((res)=> setSeller(res))
};

export {handleChecks}