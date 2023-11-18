import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#3498db", 
    borderRadius: 12
  },
  logo: {
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    marginRight: 10, 
  },
  title: {
    fontSize: 20, 
    color: "#fff", 
    fontWeight: "bold",
  },
});
