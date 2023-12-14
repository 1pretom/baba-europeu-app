import React, { useState } from "react";
import { Linking } from "react-native";
import * as S from './styles';

const PedidoDeNamoro = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: 50,
    left: 50,
  });

  const handleNoButtonClick = () => {
    const newTop = Math.random() * 500;
    const newLeft = Math.random() * 300;
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const handleSimButtonClick = () => {
    Linking.openURL("https://www.youtube.com/watch?v=e0_KXb2lTWA");
  };

  return (
    <S.Container>
      <S.NoButton
        onPress={handleNoButtonClick}
        top={noButtonPosition.top}
        left={noButtonPosition.left}
      >
        <S.ButtonText>Não</S.ButtonText>
      </S.NoButton>

      <S.SimButton onPress={handleSimButtonClick}>
        <S.ButtonText>SIIIM</S.ButtonText>
      </S.SimButton>
    </S.Container>
  );
};

export default PedidoDeNamoro;
