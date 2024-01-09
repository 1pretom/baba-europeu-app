import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* <DrawerRoutes /> */}
      <AuthRoutes/>
    </NavigationContainer>
  );
};
