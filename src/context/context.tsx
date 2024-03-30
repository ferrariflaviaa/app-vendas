/* eslint-disable @typescript-eslint/no-explicit-any */
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Alert } from "react-native";


import { selectLogin } from "../database/TBUSUARIO/SELECT/selectLogin";
import { getDBConnection } from "../database/connection";
import { SellerHeaders } from "../types/SellerHeaders";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Vendedor } from "../types/vendedor";


interface IUserProviderContext {
  children: ReactNode;
}
interface IHandleValidTokenSeller {
  cnpj?: string;
  token: string;
  // setModal: Dispatch<SetStateAction<IValidModalContext>>;
  navigate: () => void;
}

interface IHandleLoginUser {
  DFLOGIN: string;
  DFSENHA: string;
  // setModal: Dispatch<SetStateAction<IValidModalContext>>;
  keepConected?: boolean;
  loadingExistSeller?: boolean;
  daysBefore?: number;
  signinLoading?: boolean;
  setSigninLoading?: Dispatch<SetStateAction<boolean>>;
  
}

interface ISaleContext {
  validTokenLoading: boolean;
  //handleValidTokenSeller: ({ token, cnpj }: IHandleValidTokenSeller) => void;
  handleLoginUser: ({
    DFLOGIN,
    DFSENHA,
    keepConected,
    loadingExistSeller,
  }: IHandleLoginUser) => void;
  loadingExistSeller: boolean;
  headers: SellerHeaders;
  seller: Vendedor;
  handleSignout: () => void;
  loadSellerMessage: string;
  setLoadSellerMessage: Dispatch<SetStateAction<string>>;
  disconectUser: () => void;
}

const Context = createContext({} as ISaleContext);

const UserProviderContext = ({ children }: IUserProviderContext) => {
  const [validTokenLoading, setValidTokenLoading] = useState<boolean>();
  const [loadingExistSeller, setLoadingExistSeller] = useState<boolean>(true);
  const [loadSellerMessage, setLoadSellerMessage] = useState("");
  const [headers, setHeaders] = useState<SellerHeaders>();
  const [seller, setSeller] = useState<Vendedor>();
  let receiveSeller: Vendedor;

  const loadSellerData = async () => {
    try {
      const responseSeller = await AsyncStorage.getItem(
        'app_vendas',
      );
      const responseHeaders = await AsyncStorage.getItem(
        '',
      );
      if (responseSeller) {
        const responseData = await JSON.parse(responseSeller);
        if (responseData) {
          setSeller(responseData);
        }
        receiveSeller = responseData;
      }
      if (responseHeaders) {
        const responseData = JSON.parse(responseHeaders);
        if (responseData) {
          // _API.defaults.headers = responseData;
          setHeaders(responseData);
        }
      }
      setLoadingExistSeller(false);
    } catch (error) {
      setLoadingExistSeller(false);
    }
  };



  const handleLoginUser = async ({
    DFLOGIN,
    DFSENHA,
    setSigninLoading
  }: IHandleLoginUser) => {
    setSigninLoading(true);
    const db =  await getDBConnection();
    setLoadingExistSeller(true);
    console.log(  DFLOGIN,DFSENHA);
    if (!headers) {
      
      if (!DFLOGIN || !DFSENHA) {
        console.log("e")
        setSigninLoading(false);
        // return setModal({
        //   isOpen: true,
        //   modalType: 2,
        //   message:
        //     "Erro ao fazer LOGIN, certifique-se que está preenchendo dados válidos!",
        // });
      }
      // if (!isConnected) {
      //   return loginUserWithoutInternet({
      //     DFLOGIN,
      //     DFSENHA,
      //     keepConected,
      //     setModal,
      //     loadingExistSeller,
      //   });
      // }

      await selectLogin({db, DFLOGIN, DFSENHA}).then((data)=> {
          setLoadingExistSeller(false);
           AsyncStorage.setItem(
            "app_vendas",
            JSON.stringify(data),
          );
          return setSeller(data);

      }).catch((error)=> {
        console.log(error);
        setLoadingExistSeller(false);
        console.log("error");
      })  
       
       
    } else {
      console.log("erro")
      setSigninLoading(false);
      setLoadingExistSeller(false);
      // return setModal({
      //   isOpen: true,
      //   modalType: 0,
      //   message:
      //     "Você precisa aceitar as permissões para o aplicativo acessar as informações do dispositivo",
      // });
    }
  };

  const handleSignout = () => {
    Alert.alert("Sair da aplicação", "Você deseja sair da aplicação?", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: async () => {
          await AsyncStorage.removeItem("app_vendas");
          setSeller(null);
          // _API.defaults.headers = null;
          // setHeaders(null);
          // AsyncStorage.removeItem('_headers');
        },
      },
    ]);
  };

  const disconectUser = async () => {
   // await AsyncStorage.removeItem("");
   setSeller(null);
    // _API.defaults.headers = null;
    // setHeaders(null);
    // AsyncStorage.removeItem('_headers');
  };

  useFocusEffect(
    useCallback(() => {
      loadSellerData();
    }, []),
  );

  useEffect(() => {
    loadSellerData();
  }, []);

  return (
    <Context.Provider
      value={{
        validTokenLoading,
        handleLoginUser,
        seller,
        headers,
        loadingExistSeller,
        handleSignout,
        loadSellerMessage,
        setLoadSellerMessage,
        disconectUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const vendasContext = () => {
  const context = useContext(Context);
  return context;
};

export { vendasContext, UserProviderContext };
