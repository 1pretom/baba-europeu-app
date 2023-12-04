import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { TabRoutes } from "./tab.routes";
import { StackRoutes } from "./stack.routes";

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
        name="Rankings"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="radio" color={color} size={size} />
          ),
          drawerLabel: "Rankings",
        }}
      />
    </Drawer.Navigator>
  );
};
