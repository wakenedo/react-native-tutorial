import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centralized: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#3A7EFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  first: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
  second: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 30,
    color: "#777",
    fontStyle: "italic",
  },
  remoteImage: {
    width: 300,
    height: 200,
    marginBottom: 30,
    borderRadius: 40,
  },
});
export default styles;
