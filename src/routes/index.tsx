
import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";
import { Loading } from "@components/Loading";

export const Routes = () => {
  const { user, isLoadingUserStorageData } = useAuth();
if(isLoadingUserStorageData){
  return <Loading/>
}
  return (
    <NavigationContainer>
      {user.id ? <DrawerRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
