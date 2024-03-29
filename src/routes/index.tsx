
import { vendasContext } from "../context/context";
import { LoadScreenAuth } from "../screen/authscreens/loadScreen";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export const Routes = () => {
  const {loadingExistSeller, seller} = vendasContext();
  const headers = {
    senha: "!23",
    nome: 'nome'
  }
  return loadingExistSeller === true ? (
    <LoadScreenAuth />
  ) : seller ? (
    <AppRoutes />
  ) : (
    <AuthRoutes {...headers} />
  );


};