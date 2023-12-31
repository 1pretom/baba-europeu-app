import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { TabRoutes } from "./tab.routes";
import { StackRoutes } from "./stack.routes";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

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
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="pocket" color={color} size={size} />
          ),
          drawerLabel: "SignIn",
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="pocket" color={color} size={size} />
          ),
          drawerLabel: "SignUp",
        }}
      />
    </Drawer.Navigator>
  );
};
