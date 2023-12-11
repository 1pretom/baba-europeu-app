//faz o não, não ser clicável
//fazer o sim ser a única opção possível e direcioar pra um vídeo

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

const PedidoDeNamoro = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: 50,
    left: 50,
  });

  const handleNoButtonClick = () => {
    const newTop = Math.random() * 500; // Gerar uma posição top aleatória
    const newLeft = Math.random() * 300; // Gerar uma posição left aleatória
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const handleSimButtonClick = () => {
    // Abrir um link para um vídeo (substitua o URL pelo seu link desejado)
    Linking.openURL("https://www.youtube.com/watch?v=SEF0-U5KxW4");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 20,
          borderRadius: 10,
          position: "absolute",
          top: noButtonPosition.top,
          left: noButtonPosition.left,
        }}
        onPress={handleNoButtonClick}
      >
        <Text style={{ color: "white" }}>Não</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 20,
          paddingTop: 20,

          borderRadius: 10,
          margin: 10,
          marginTop: 10,
        }}
        onPress={handleSimButtonClick}
      >
        <Text style={{ color: "white" }}>Sim</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PedidoDeNamoro;
