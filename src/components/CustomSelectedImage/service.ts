import { Dispatch, SetStateAction } from "react";
import { Alert } from "react-native";
import { getDBConnection } from "../../database/connection";

interface ISelectedRemoveImage {
  image: {
    item: string;
    index: number;
  };
}
interface IHandleRemoveImage {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  image: {
    item: string;
    index: number;
  };
}
const removeImage = async ({
  image,
  images,
  setImages,
}: IHandleRemoveImage) => {
  const filteredImages = images.filter((_, index) => index !== image.index);
  setImages(filteredImages);
    // const db = await getDBConnection();
    // deleteImage({ db});
  
};

const handleAlertRemoveImage = ({
  image,
  images,
  setImages,
}: IHandleRemoveImage) => {
  Alert.alert('Atenção!', 'Deseja remover essa imagem?', [
    { text: 'Não', style: 'cancel' },
    {
      text: 'Sim',
      style: 'default',
      onPress: () => removeImage({ image, images, setImages }),
    },
  ]);
};

export {ISelectedRemoveImage, handleAlertRemoveImage}