import React from "react";
import styles from "./styles.js";
import { Text, View, TouchableOpacity, Image } from "react-native";

import Success from "../../../assets/success.png";

function CadConcluido({ navigation }) {
  function navigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <Image source={Success} style={styles.logo} />
          <Text
            style={{
              marginBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            Cadastro concluído!
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "300", color: "#FFF" }}>
            Agora você faz parte do Comércio Amigável!
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CadConcluido;
