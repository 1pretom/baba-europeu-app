import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { AuthRoutes } from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";

export const Routes = () => {
  const contextData = useContext(AuthContext);
  console.log("🚀 ~ Routes ~ contextData:", contextData)
  
  return (
    <NavigationContainer>
      <DrawerRoutes />
      {/* <AuthRoutes/> */}
    </NavigationContainer>
  );
};
