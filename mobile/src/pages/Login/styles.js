import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 135,
  },
  topo: {
    backgroundColor: "#E2E2E2",
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    margin: 50,
    width: 150,
    height: 150,
  },
  inputTop: {
    height: 60,
    padding: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "white",
    borderColor: "#E6E6F0",
    borderWidth: 0.5,
    fontSize: 20,
  },
  inputBottom: {
    height: 60,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "white",
    borderColor: "#E6E6F0",
    borderWidth: 0.5,
    fontSize: 20,
  },
  button: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#007BFF",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
});

export default styles;