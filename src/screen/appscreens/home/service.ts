import { HomeProps } from "../../../routes/types/approutes/appscreen";


const handleNavigatePhotography  = ({ navigation }: HomeProps) => {
  navigation.navigate('ProductPhotography', { screen: 'First' });
};
const handleQrCodeExample  = ({ navigation }: HomeProps) => {
  navigation.navigate('QrCodeExample', { screen: 'First' });
};
const handleSettings  = ({ navigation }: HomeProps) => {
  navigation.navigate('Settings', { screen: 'First' });
};

export {handleNavigatePhotography,handleQrCodeExample, handleSettings }