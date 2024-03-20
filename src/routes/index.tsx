import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { AuthRoutes } from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignUpScreen from "@screens/SignUpScreen";
import { useAuth } from "@hooks/useAuth";

export const Routes = () => {
  const { user } = useAuth();
  console.log("🚀 ~ Routes ~ contextDat:", user);
  

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
