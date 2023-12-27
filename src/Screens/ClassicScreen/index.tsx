import { ClassicCard } from "@components/ClassicCard";
import * as S from "./styles";
import { useCallback, useState } from "react";
import { Highlight } from "@components/Highlight";
import { FlashList } from "@shopify/flash-list";
import { Alert, FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { classicGetAll } from "@storage/classic/classicGetAll";
import { Loading } from "@components/ActivityIndicator";
import { ClassicHeader } from "@components/ClassicHeader";

export const ClassicScreen = () => {
  const [classicTeams, setClassicTeams] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const handleNewClassic = () => {
    navigation.navigate("NewClassicTeam");
  };

  const fetchClassicTeams = async () => {
    try {
      setIsLoading(true);
      const data = await classicGetAll();
      setClassicTeams(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Classicos", "Não deu pra carregar os clássicos");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenClassicTeam = (classicTeam: string) => {
    navigation.navigate("ClassicPlayers", { classicTeam });
  };

  useFocusEffect(
    useCallback(() => {
      fetchClassicTeams();
    }, [])
  );

  return (
    <S.Container>
      <ClassicHeader />
      <Highlight title="Dia de clássico" subtitle="Bote se vc é barril" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={classicTeams}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <ClassicCard
                title={item}
                onPress={() => handleOpenClassicTeam(item)}
              />
            );
          }}
          contentContainerStyle={classicTeams.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message={"Como assim não tem clássico?"} />
          )}
        />
      )}
      <Button title={"Criar time no clássico"} onPress={handleNewClassic} />
    </S.Container>
  );
};
