import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AppStackType, RegisterStackType } from "./approutes";

type HomeProps = NativeStackScreenProps<AppStackType, "Home">;
type RegisterProps = NativeStackScreenProps<RegisterStackType, "Register">;

type HomeNavigationProps = NativeStackNavigationProp<AppStackType>;

export {
  HomeProps,

};