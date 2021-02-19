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
  topo: {
    backgroundColor: "#E2E2E2",
    height: 280,
  },
  imgPerfil: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 100
  },
  inputRadius: {
    height: 60,
    padding: 20,
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
  inputTxtArea: {
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
    marginBottom: 15
  },
  buttonG: {
    height: 200,
    width: 330,
    borderRadius: 10,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderColor: "#E6E6F0",
    borderWidth: 1,
  },
  imgAnuncio: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderColor: "#E6E6F0",
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconEditPhoto: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  }
});

export default styles;