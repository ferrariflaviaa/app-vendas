import { NativeStackNavigationOptions } from "@react-navigation/native-stack";


import themes from "../../themes";
import { APP_FONT_SEMI_BOLD } from "../../config";

export const screenOptionMetaTank = {
  headerStyle: {
    backgroundColor: themes.COLORS.SECONDARY,
  },
  headerTitleStyle: {
    fontFamily: APP_FONT_SEMI_BOLD,
    fontSize: 18,
    border: 0,
  },
  headerTintColor: "#fff",
} as NativeStackNavigationOptions;