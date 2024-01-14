import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { TankerHeaders } from "../types/TankerHeaders";
import { AuthStackType } from "./types/authroutes/authroutes";
import { Signin } from "../screen/authscreens/signin";

const AuthStack = createNativeStackNavigator<AuthStackType>();

export default function AuthRoutes(headers: TankerHeaders) {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      //initialRouteName={headers.nome ? "Signin" : "ValidToken"}
    >
    {/* <AuthStack.Screen name="ValidToken" component={ValidToken} /> */}
      <AuthStack.Screen name="Signin" component={Signin} />
    </AuthStack.Navigator>
  );
}