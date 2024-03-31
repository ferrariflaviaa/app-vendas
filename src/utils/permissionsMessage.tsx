import { Alert, PermissionsAndroid } from 'react-native';

import { requestAccessReadPhoneState } from './readPhoneStatePermission';
import { requestNearbyDevices } from './requestNearbyDevices';

export const permissionsMessage = () => {
  Alert.alert(
    'Atenção',
    'Solicitamos as seguintes permissões: acesso à câmera e à galeria de mídia para envio de fotos.',
    [
      {
        text: 'Ok',
        onPress: () =>
          requestAccessReadPhoneState().then(() => {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
              title: 'Permissão de Câmera',
              message: 'O aplicativo precisa de permissão para câmera',
              buttonPositive: 'Aceitar',
              buttonNegative: 'Rejeitar',
            }).then(() => {
              requestNearbyDevices().then(res => {
                console.log(res);
              });
            });
          }),
      },
    ],
    { cancelable: false },
  );
};
