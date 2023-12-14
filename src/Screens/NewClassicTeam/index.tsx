import { Header } from "@components/Header";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
export const NewClassicTeam = () => {
  <S.Container>
    <Header />
    <S.Content>
      <S.Icon />
      <Highlight title="Novo time" subtitle="Bote seu time pra jogo" />
      <Button title="Criar" />
    </S.Content>
  </S.Container>;
};
