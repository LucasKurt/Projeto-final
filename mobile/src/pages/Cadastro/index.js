import React from "react";
import styles from "./styles.js";
import { Text, View, TouchableOpacity } from "react-native";

function Cadastro({ navigation }) {
  function navigateToCadVendedor() {
    navigation.navigate("CadVendedor");
  }
  function navigateToCadCliente() {
    navigation.navigate("CadCliente");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text
            style={{
              marginBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
              color: "#5F5F5F",
            }}
          >
            Crie sua conta gratuíta
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "300", color: "#5F5F5F" }}>
            Simples e rápido
          </Text>
        </View>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 30,
            fontWeight: "bold",
            color: "#5F5F5F",
          }}
        >
          O que deseja fazer?
        </Text>
        <TouchableOpacity style={styles.button} onPress={navigateToCadVendedor}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Vender</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToCadCliente}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Cadastro;
