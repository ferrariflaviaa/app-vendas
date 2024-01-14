import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

interface ICustomPageName {
  page: "Register";
}
const returnPageName = ({ page }: ICustomPageName) => {

  let options: NativeStackNavigationOptions;
  switch (page) {
    case "Register": {
      options = { headerTitle: "Produtos" };
      return { ...{ options } };
    }
  
    default:
  }
};

export { returnPageName };