import * as S from "./styles";
import { Center, Spinner } from "native-base";
export const Loading = () => {
  return (
    // <S.Container>
    //   <S.Load size="large" />

    // </S.Container>
    <Center flex={1}>
      <Spinner color={"indigo.900"} size={"lg"} />
    </Center>
  );
};
