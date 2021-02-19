import React from "react";
import styles from "./styles.js";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

function Mei({ navigation }) {
  function navigateToPerfil() {
    navigation.navigate("Perfil");
  }
  function navigateToAnuncios() {
    navigation.navigate("Anuncios");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topo}>
        <ImageBackground
          source={require("../../../assets/header-mei.jpeg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "300",
              color: "#5F5F5F",
              marginBottom: 10,
            }}
          >
            Seja bem-vindo.
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#5F5F5F",
              marginBottom: 20,
            }}
          >
            Você já conhece o MEI?
          </Text>
          <View style={styles.cards}>
            <TouchableOpacity style={[styles.buttonP, styles.buttonVantagens]}>
              <Image
                source={require("../../../assets/check-32.png")}
                style={styles.img32}
              />
              <Text style={{ color: "#FFF", fontSize: 20 }}>Vantagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonP, styles.buttonComo]}>
              <Image
                source={require("../../../assets/question-32.png")}
                style={styles.img32}
              />
              <Text style={{ color: "#FFF", fontSize: 20 }}>Como ser?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonG, styles.buttonCurso1]}>
              <Image
                source={require("../../../assets/edith-32.png")}
                style={styles.img64}
              />
              <Text style={{ color: "#FFF", fontSize: 20 }}>
                Como expandir seu negócio?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonG, styles.buttonCurso2]}>
              <Image
                source={require("../../../assets/edit-32.png")}
                style={styles.img64}
              />
              <Text style={{ color: "#FFF", fontSize: 20 }}>
                Formalizar seu negócio
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToPerfil}>
              <Text style={{ color: "#FFF", fontSize: 20 }}>Minha conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToAnuncios}
            >
              <Text style={{ color: "#FFF", fontSize: 20 }}>Anúncios</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Mei;
