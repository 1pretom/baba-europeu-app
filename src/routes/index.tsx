import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { AuthRoutes } from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignUpScreen from "@screens/SignUpScreen";

export const Routes = () => {
  const contextData = useContext(AuthContext);
  console.log("🚀 ~ Routes ~ contextData:", contextData);

  return (
    <NavigationContainer>
      <DrawerRoutes />
      {/* <SignedIn></SignedIn>
      <SignedOut>
        <SignUpScreen />
      </SignedOut> */}
      {/* <AuthRoutes/> */}
    </NavigationContainer>
  );
};
