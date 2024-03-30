import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AppStackType, ProductPhotographyStackType } from "./approutes";

type HomeProps = NativeStackScreenProps<AppStackType, "Home">;
type ProductPhotographyProps = NativeStackScreenProps<AppStackType, "ProductPhotography">;
type ProductPhotographyFirstProps = NativeStackScreenProps<ProductPhotographyStackType, "First">;

type HomeNavigationProps = NativeStackNavigationProp<AppStackType>;

export {
  HomeProps,
  ProductPhotographyProps,
  ProductPhotographyFirstProps
};