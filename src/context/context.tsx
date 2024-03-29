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
  seller: string[];
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
  const [seller, setSeller] = useState<string[]>();
  let receiveSeller: string;

  const loadSellerData = async () => {
    try {
      const responseSeller = await AsyncStorage.getItem(
        '',
      );
      const responseHeaders = await AsyncStorage.getItem(
        '',
      );
      if (responseSeller) {
        const responseData = await JSON.parse(responseSeller);
        if (responseData && responseData.keepConected) {
          setSeller(responseData);
        }
        receiveSeller = "Teste";
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

  // const loadSellerData = async () => {
  //   try {
  //     const responseTanker = await AsyncStorage.getItem("");
  //     if (responseTanker) {
  //       const responseData = await JSON.parse(responseTanker);
  //       if (responseData) {
  //         setTanker(responseData);
  //       }
  //     }

  //     const responseHeaders = await AsyncStorage.getItem(
  //       "_headers",
  //     );
  //     if (responseHeaders) {
  //       const responseData = await JSON.parse(responseHeaders);
  //       if (responseData) {
  //        // _API.defaults.headers = responseData;
  //         setHeaders(responseData);
  //       }
  //     }
  //     setLoadingExistTanker(false);
  //   } catch (error) {
  //     setLoadingExistTanker(false);
  //   }
  // };

  const handleLoginUser = async ({
    DFLOGIN,
    DFSENHA,
    setSigninLoading
  }: IHandleLoginUser) => {
    setSigninLoading(true);
    const db = getDBConnection();
    setLoadingExistSeller(true);
    console.log(  DFLOGIN,DFSENHA,);
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
      if(DFLOGIN === '1234' && DFSENHA === '1234'){
        console.log("Caiu");
        const data = [DFLOGIN, DFSENHA]
        setLoadingExistSeller(false);
        return setSeller(data);
      }     
       
       
    } else {
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
          //await AsyncStorage.removeItem("");
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
      //loadTankerData();
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
