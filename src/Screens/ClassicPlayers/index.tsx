import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
export const ClassicPlayers = () => {
  return (
    <S.Container>
      <Highlight
        title="nombre del equipo"
        subtitle="
        Agregar jugadores y separar equipos"
      />
      <S.Fomr>
        <Input placeholder="Nombre de la persona" autoCorrect={false} />
        <ButtonIcon icon="add" type="PRIMARY" />
      </S.Fomr>
      <Filter title={"Time A"}/>
    </S.Container>
  );
};
