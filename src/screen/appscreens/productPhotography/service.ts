import { Dispatch, SetStateAction } from "react";
import { selectChecks } from "../../../database/TBUSUARIO/SELECT/selectChecks";
import { getDBConnection } from "../../../database/connection";
import { HomeProps } from "../../../routes/types/approutes/appscreen";
import { Vendedor } from "../../../types/vendedor";
import { Alert } from "react-native";
import { selectImageFromCameraOrStorage } from "../../../utils/selectImageFromCameraOrStorage";

interface IHandleChecks {
  DFCPFCNPJ: string;
  setSeller: Dispatch<SetStateAction<Vendedor>>
}
interface ICaputureImage {
  imagesProblemReport: string[];
  setImagesProblemReport: Dispatch<SetStateAction<string[]>>;
  option?: 'camera' | 'storage';
}
interface IDataCaputureImage {
  data: ICaputureImage;
}

const handleChecks  = async({ DFCPFCNPJ, setSeller }: IHandleChecks) => {
  const db = await getDBConnection();
  selectChecks({db, DFCPFCNPJ}).then((res)=> setSeller(res))
};

const executeCaputureImage = ({ data }: IDataCaputureImage) => {
  const { imagesProblemReport, setImagesProblemReport, option } = data;
  selectImageFromCameraOrStorage({
    option,
    setImages: setImagesProblemReport,
    images: imagesProblemReport,
  });
};

const handleSelectImage = ({ data }: IDataCaputureImage) => {
  Alert.alert(
    'Selecionar opção',
    'Escolha uma opção para carregar foto da amostra analisada',
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Câmera',
        style: 'default',
        onPress: () =>
          executeCaputureImage({
            data: {
              ...data,
              option: 'camera',
            },
          }),
      },
      {
        text: 'Galeria',
        style: 'default',
        onPress: () =>
          executeCaputureImage({
            data: {
              ...data,
              option: 'storage',
            },
          }),
      },
    ],
  );
};

interface IOpenModal {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

interface ISetTypeAndOpenModal extends IOpenModal {
  type?: 0 | 1 | 2 | 3;
  setModalType?: Dispatch<SetStateAction<0 | 1 | 2 | 3>>;
}

const openModal = ({ setIsOpen, isOpen }: IOpenModal) => {
  setIsOpen(!isOpen);
};

const setTypeAndOpenModal = ({
  isOpen,
  setIsOpen,
  type,
  setModalType,
}: ISetTypeAndOpenModal) => {
  setModalType(type);
  openModal({ isOpen, setIsOpen });
};

// setTypeAndOpenModal({ isOpen, setIsOpen, setModalType, type: 2 });

export {handleChecks, handleSelectImage, openModal}