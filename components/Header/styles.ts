import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#3498db", 
    borderRadius: 12,
    width: "100%"
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
  menuIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bar1: {
    height: 3,
    width: 25,
    backgroundColor: "#fff",
    marginVertical: 4,
    transform: [{ rotate: "45deg" }],
  },
  bar2: {
    height: 3,
    width: 25,
    backgroundColor: "#fff",
    marginVertical: 4,
    opacity: 0,
  },
  bar3: {
    height: 3,
    width: 25,
    backgroundColor: "#fff",
    marginVertical: 4,
    transform: [{ rotate: "-45deg" }],
  },
});
