import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { TTabRoutes } from "./types";

const { Navigator, Screen } = createNativeStackNavigator();

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<TTabRoutes>;
export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
