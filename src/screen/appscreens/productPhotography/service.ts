import { HomeProps } from "../../../routes/types/approutes/appscreen";

interface IHandleNavigatePhotography {
  screen: HomeProps;
}

const handleNavigatePhotography  = ({ navigation }: HomeProps) => {
  navigation.navigate('ProductPhotography', { screen: 'First' });
};

export {handleNavigatePhotography}