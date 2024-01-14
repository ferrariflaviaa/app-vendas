import { NavigatorScreenParams } from "@react-navigation/native";

export type RegisterStackType = {
  Register: { First: undefined };
};

export type AppStackType = {
  Home: undefined;
  RegisterScreen: NavigatorScreenParams<RegisterStackType>;
};