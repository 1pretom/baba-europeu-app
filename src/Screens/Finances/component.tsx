import { ImageBackground } from "react-native";
import * as S from "./styles";
import coracoes from "@assets/coracoes.png";

export const Finances = () => {
  return (
    <S.Container>
      <ImageBackground
        source={coracoes}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <S.Text>Oi gatinha😺, aceita namora comigo?</S.Text>
      </ImageBackground>
    </S.Container>
  );
};
export default Finances;
