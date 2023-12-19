import { ButtonIcon } from "@components/ButtonIcon";
import * as S from "./styles";
import { TClassicPlayerCard } from "./types";

export const ClassicPlayerCard = ({ name, onRemove }: TClassicPlayerCard) => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  );
};
