import { HomeProps } from "../../../routes/types/approutes/appscreen";


const handleNavigatePhotography  = ({ navigation }: HomeProps) => {
  navigation.navigate('ProductPhotography', { screen: 'First' });
};
const handleQrCodeExample  = ({ navigation }: HomeProps) => {
  navigation.navigate('QrCodeExample', { screen: 'First' });
};

export {handleNavigatePhotography,handleQrCodeExample }