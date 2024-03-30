import { HomeProps } from "../../../routes/types/approutes/appscreen";


const handleNavigatePhotography  = ({ navigation }: HomeProps) => {
  navigation.navigate('ProductPhotography', { screen: 'First' });
};

export {handleNavigatePhotography}