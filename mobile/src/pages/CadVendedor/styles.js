import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#F1F1F1",
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  head: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
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
  inputMiddle: {
    height: 60,
    padding: 20,
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
    marginBottom: 20,
  },
  button: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#28A745",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;