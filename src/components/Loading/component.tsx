import * as S from "./styles";
import { TLoadingProps } from "./types";
export const Loading = ({ size }: TLoadingProps) => {
  const defaultSize = "large" || size;
  return (
    <S.Container>
      <S.Load size={defaultSize} />
    </S.Container>
  );
};
