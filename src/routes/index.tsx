import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};
