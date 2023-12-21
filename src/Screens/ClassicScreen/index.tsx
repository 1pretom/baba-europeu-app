import { ClassicCard } from "@components/ClassicCard";
import * as S from "./styles";
import { useState } from "react";
import { Highlight } from "@components/Highlight";
import { FlashList } from "@shopify/flash-list";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export const ClassicScreen = () => {
  const [classicTeam, setClassicTeam] = useState<string[]>([]);
  const navigation = useNavigation();
  const handleNewClassic = () => {
    navigation.navigate("NewClassicTeam");
  };

  return (
    <S.Container>
      <Highlight title="Dia de clássico" subtitle="Bote se vc é barril" />

      <FlatList
        data={classicTeam}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          console.log("Item:", item);
          return <ClassicCard title={item} />;
        }}
        contentContainerStyle={classicTeam.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message={"Como assim não tem clássico?"} />
        )}
      />
      <Button title={"Criar time no clássico"} onPress={handleNewClassic} />
    </S.Container>
  );
};
