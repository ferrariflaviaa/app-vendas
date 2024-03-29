import { HomeProps } from "../../../routes/types/approutes/appscreen";

interface IHandleNavigatePhotography {
  screen: HomeProps;
}

const handleNavigatePhotography = ({
  screen,
}: IHandleNavigatePhotography) => {
  screen.navigation.navigate('RegisterScreen', {
    screen: 'Register',
    // params: { collect },
  });
};

export {handleNavigatePhotography}