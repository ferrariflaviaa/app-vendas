import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { returnPageName } from "./utils/returnPageName";
import { screenOptionMetaTank } from "./utils/screenOptionMetaTank";
import { AppStackType } from "./types/approutes/approutes";
import { Home } from "../screen/appscreens/home";

const AppStack = createNativeStackNavigator<AppStackType>();



export default function AppRoutes() {
  return (
    <AppStack.Navigator screenOptions={screenOptionMetaTank}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Vendas" }}
      />
      <AppStack.Screen
        name="RegisterScreen"
        component={() => null}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}