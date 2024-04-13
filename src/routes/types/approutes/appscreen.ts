import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AppStackType } from "./approutes";

type HomeProps = NativeStackScreenProps<AppStackType, "Home">;
type ProductPhotographyProps = NativeStackScreenProps<AppStackType, "ProductPhotography">;
type QrCodeExampleProps = NativeStackScreenProps<AppStackType, "QrCodeExample">;

export {
  HomeProps,
  ProductPhotographyProps,
  QrCodeExampleProps,
};