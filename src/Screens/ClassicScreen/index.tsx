import { ClassicCard } from "@components/ClassicCard";
import * as S from "./styles";
import { useState } from "react";
import { Highlight } from "@components/Highlight";
import { FlashList } from "@shopify/flash-list";

export const ClassicScreen = () => {
  const [classicTeam, setClassicTeam] = useState<string[]>(["Cahia", "Leão"]);

  return (
    <S.Container>
      <Highlight title="Dia de clássico" subtitle="Bote se vc é barril" />

      <FlashList
        data={classicTeam}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          console.log("Item:", item);
          return <ClassicCard title={item} />;
        }}
      />

      {/* <ClassicCard title="Cahia" />
      <ClassicCard title="Leão" /> */}
    </S.Container>
  );
};
