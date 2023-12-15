import * as S from "./styles";
import { TButtonIcon } from "./types";
export const ButtonIcon = ({
  icon,
  type = "PRIMARY",
  ...rest
}: TButtonIcon) => {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  );
};
