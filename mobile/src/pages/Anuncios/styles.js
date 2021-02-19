import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#393E42",
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  content: {

  },
  topo: {
    backgroundColor: "#E2E2E2",
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRadius: {
    height: 60,
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderColor: "#E6E6F0",
    borderWidth: 0.5,
    fontSize: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default styles;