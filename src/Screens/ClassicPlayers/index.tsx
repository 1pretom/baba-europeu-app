import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
export const ClassicPlayers = () => {
  return (
    <S.Container>
      <Highlight
        title="nome do time"
        subtitle="adicione os jogadores e separe os times"
      />
      <S.Fomr>
        <Input placeholder="Nome da persona" autoCorrect={false} />
        <ButtonIcon icon="add" type="PRIMARY" />
      </S.Fomr>
    </S.Container>
  );
};
