
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export const Routes = () => {
  const headers = {
    senha: "!23",
    nome: 'nome'
  }
  let loadingExistTanker = true
  return loadingExistTanker ?   <AuthRoutes {...headers} />  : <AppRoutes />;



};