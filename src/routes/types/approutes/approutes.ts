import { NavigatorScreenParams } from "@react-navigation/native";

export type ProductPhotographyStackType = {
  First: undefined;
};

export type QrCodeExampleStackType = {
  First: undefined;
}

export type SettingsStackType = {
  First: undefined;
}

export type AppStackType = {
  Home: undefined;
  ProductPhotography: NavigatorScreenParams<ProductPhotographyStackType>;
  QrCodeExample: NavigatorScreenParams<QrCodeExampleStackType>
  Settings: NavigatorScreenParams<SettingsStackType>
};