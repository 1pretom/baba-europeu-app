import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";
import { DrawerRoutes } from "./drawer.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
};
