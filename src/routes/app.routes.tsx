import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { returnPageName } from "./utils/returnPageName";
import { screenOptionMetaTank } from "./utils/screenOptionMetaTank";
import { AppStackType, ProductPhotographyStackType, QrCodeExampleStackType } from "./types/approutes/approutes";
import { Home } from "../screen/appscreens/home";
import { ProductPhotography } from "../screen/appscreens/productPhotography";
import { QrCodeExample } from "../screen/appscreens/qrCodeExample";

const AppStack = createNativeStackNavigator<AppStackType>();
const ProductPhotographyStack = createNativeStackNavigator<ProductPhotographyStackType>();
const QrCodeExampleStack = createNativeStackNavigator<QrCodeExampleStackType>();

const ProductPhotographyAppStack = () => {
  return (
    <ProductPhotographyStack.Navigator screenOptions={screenOptionMetaTank}>
      <ProductPhotographyStack.Screen
        name="First"
        component={ProductPhotography}
        options={{ headerTitle: "Fotografia" }}
      />
    </ProductPhotographyStack.Navigator>
  );
};
const QrCodeExampleAppStack = () => {
  return (
    <QrCodeExampleStack.Navigator screenOptions={screenOptionMetaTank}>
      <QrCodeExampleStack.Screen
        name="First"
        component={QrCodeExample}
        options={{ headerTitle: "Fotografia" }}
      />
    </QrCodeExampleStack.Navigator>
  );
};

export default function AppRoutes() {
  return (
    <AppStack.Navigator screenOptions={screenOptionMetaTank}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Vendas" }}
      />
      <AppStack.Screen
        name="ProductPhotography"
        component={ProductPhotographyAppStack}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="QrCodeExample"
        component={QrCodeExampleAppStack}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}