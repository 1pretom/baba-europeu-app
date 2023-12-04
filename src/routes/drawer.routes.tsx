import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { TabRoutes } from "./tab.routes";

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ title: "" }}>
      <Drawer.Screen
        name="finances"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="play" color={color} size={size} />
          ),
          drawerLabel: "Finanças",
        }}
      />
    </Drawer.Navigator>
  );
};
