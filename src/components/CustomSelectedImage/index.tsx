import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { FlatList } from 'react-native';

// import {
//   handleAlertRemoveImage,
//   ISelectedRemoveImage,
// } from '../../screens/appscreens/MyCollectSreens/tankOptions/informQuality/services';
// import { RegisterItem } from '../../types/registerItem';
// import { returnAppIcons } from '../../utils/returnAppIcons';
import {
  ContainerCustomSelectImage,
  ContainerCustomSelectImageRow,
  ContainerRemoveImage,
  ContentCustomSelectedImage,
  ContentCustomSelectImage,
  CustomContainerSelectedImage,
  CustomContentIcon,
  CustomLabel,
} from './styles';
import { CustomOpenImage } from '../modal/CustomOpenImage';
import { handleAlertRemoveImage, ISelectedRemoveImage } from './service';

interface ICustomSelectedImage {
  label: string;
  iconSelect?: ReactNode;
  selectedImage?: () => void;
  images?: string[];
  setImages?: Dispatch<SetStateAction<string[]>>;
  alertImage?: boolean;
}

export const CustomSelectedImage = ({
  label,
  iconSelect,
  selectedImage,
  images,
  setImages,
  alertImage,
}: ICustomSelectedImage) => {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState('');

  const [valid, setValid] = useState<'initial' | 'false' | 'true'>('initial');

  const validEndCollect = () => {
    if (image === '') {
      return setValid('true');
    }
  };

  useEffect(() => {
    if (image !== '') {
      setValid('false');
    }
    if (alertImage === true) {
      validEndCollect();
    }
  }, [alertImage, image]);

  const openAndCloseModal = () => {
    setOpenModal(!openModal);
  };

  const RemoveImage = ({ image }: ISelectedRemoveImage) => {
    return (
      <ContainerRemoveImage
        onPress={() => handleAlertRemoveImage({ image, images, setImages })}
      >
        {/* {returnAppIcons({ icon: 'close-image', size: 20 })} */}
      </ContainerRemoveImage>
    );
  };
  return (
    <ContainerCustomSelectImage>
      <ContainerCustomSelectImageRow>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          keyExtractor={(_, index) => String(index)}
          style={{ margin: 0 }}
          renderItem={({ item, index }) => {
            const image: any = item;
            const { DFREGISTROIMAGEM } = image;
            return (
              <CustomContainerSelectedImage
                onPress={() => {
                  setImage(DFREGISTROIMAGEM);
                  openAndCloseModal();
                }}
                style={{}}
              >
                <ContentCustomSelectedImage
                  source={{
                    uri: `data:image/jpg;base64,${DFREGISTROIMAGEM}`,
                  }}
                  style={{
                    width: 90,
                    height: 90,
                    resizeMode: 'cover',
                    // borderColor: 'red',
                    // borderWidth: valid === 'true' && alertImage ? 1 : 0,
                  }}
                />
                <RemoveImage image={{ index, item }} />
              </CustomContainerSelectedImage>
            );
          }}
        />
        <CustomOpenImage
          {...{
            openAndCloseModal,
            openModal,
            selectedImage: image,
          }}
        />
      </ContainerCustomSelectImageRow>
    </ContainerCustomSelectImage>
  );
};
