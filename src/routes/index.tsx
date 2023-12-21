import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
};
