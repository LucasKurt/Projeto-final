import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#F1F1F1",
  },
  content: {
    height: "100%",
    marginLeft: 20,
    marginRight: 20,
  },
  head: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 130,
  },
  button: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#007BFF",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default styles;