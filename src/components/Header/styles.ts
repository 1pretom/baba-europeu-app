// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//   container: {};
//   logo: {
//     width: 40;
//     height: 40;
//     borderRadius: 20;
//     marginRight: 10;
//   };
//   title: {};
//   menuIcon: {
//     width: 30;
//     height: 30;
//     marginLeft: 10;
//     justifyContent: "center";
//     alignItems: "center";
//   };
//   bar1: {
//     height: 3;
//     width: 25;
//     backgroundColor: "#fff";
//     marginVertical: 4;
//     transform: [{ rotate: "45deg" }];
//   };
//   bar2: {
//     height: 3;
//     width: 25;
//     backgroundColor: "#fff";
//     marginVertical: 4;
//     opacity: 0;
//   };
//   bar3: {
//     height: 3;
//     width: 25;
//     backgroundColor: "#fff";
//     marginVertical: 4;
//     transform: [{ rotate: "-45deg" }];
//   };
// });

import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #3498db;
  border-radius: 12px;
  width: 100%;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
