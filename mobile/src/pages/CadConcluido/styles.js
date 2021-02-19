import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#343A40",
  },
  content: {
    height: "100%",
    marginLeft: 20,
    marginRight: 20,
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 120,
  },
  logo: {
    alignSelf: "center",
    marginBottom: 80,
    width: 150,
    height: 150,
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