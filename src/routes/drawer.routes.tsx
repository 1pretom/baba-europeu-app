import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { TabRoutes } from "./tab.routes";
import { StackRoutes } from "./stack.routes";
import { ClassicScreen } from "../Screens/ClassicScreen/index";

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ title: "" }}>
      <Drawer.Screen
        name="finances"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="dollar-sign" color={color} size={size} />
          ),
          drawerLabel: "Finanças",
        }}
      />
      <Drawer.Screen
        name="Classicos"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="pocket" color={color} size={size} />
          ),
          drawerLabel: "Classicos",
        }}
      />
    </Drawer.Navigator>
  );
};
