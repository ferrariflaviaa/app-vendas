import { NavigatorScreenParams } from "@react-navigation/native";

export type ProductPhotographyStackType = {
  First: undefined 
};

export type AppStackType = {
  Home: undefined;
  ProductPhotography: NavigatorScreenParams<ProductPhotographyStackType>;
};