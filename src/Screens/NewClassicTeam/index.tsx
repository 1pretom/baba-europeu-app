import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
export const NewClassicTeam = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Icon />
        <Highlight title="Novo time" subtitle="Bote seu time pra jogo" />
        <Input placeholder="Bote aqui o nome do time" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
};
