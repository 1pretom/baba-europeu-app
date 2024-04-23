import { Loading } from "@components/Loading";
import * as S from "./styles";
import { TButton } from "./types";

export const Button = ({
  title,
  type = "PRIMARY",
  loading,
  ...rest
}: TButton) => {
  return (
    <S.Container type={type} {...rest}>
      {loading ? (
        <Loading size={"small"} />
      ) : (
        <S.Title type={type}>{title}</S.Title>
      )}
    </S.Container>
  );
};
